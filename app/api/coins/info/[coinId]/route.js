import { NextResponse } from "next/server";

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export async function GET(request, { params }) {
    try {
        const coinId = params.coinId;
        
        if (!coinId || typeof coinId !== 'string') {
            return NextResponse.json({ 
                success: false,
                error: 'Invalid cryptocurrency ID' 
            }, { status: 400 });
        }

        const { searchParams } = new URL(request.url);
        const currency = searchParams.get('currency') || 'usd';

        const apiUrl = `${COINGECKO_BASE_URL}/coins/${coinId}`;
        const urlWithParams = new URL(apiUrl);
        urlWithParams.searchParams.append('localization', 'false');
        urlWithParams.searchParams.append('tickers', 'false');      
        urlWithParams.searchParams.append('market_data', 'true');  
        urlWithParams.searchParams.append('community_data', 'false'); 
        urlWithParams.searchParams.append('developer_data', 'false'); 
        urlWithParams.searchParams.append('sparkline', 'false');   
        
        const response = await fetch(urlWithParams.toString(), {
            headers: {
                'Accept': 'application/json',
                'X-CG-Demo-API-Key': process.env.COINGECKO_API_KEY || '',
            },
            next: {
                revalidate: 1800
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`CoinGecko API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        
        // Format and clean the response data
        const formattedData = {
            id: data.id,
            symbol: data.symbol?.toUpperCase(),
            name: data.name,
            description: data.description?.en,
            image: {
                thumb: data.image?.thumb,
                small: data.image?.small,
                large: data.image?.large,
            },
            market_data: {
                current_price: {
                    [currency]: data.market_data?.current_price?.[currency],
                },
                market_cap: {
                    [currency]: data.market_data?.market_cap?.[currency],
                },
                market_cap_rank: data.market_data?.market_cap_rank,
                total_volume: {
                    [currency]: data.market_data?.total_volume?.[currency],
                },
                high_24h: {
                    [currency]: data.market_data?.high_24h?.[currency],
                },
                low_24h: {
                    [currency]: data.market_data?.low_24h?.[currency],
                },
                price_change_24h: data.market_data?.price_change_24h,
                price_change_percentage_24h: data.market_data?.price_change_percentage_24h,
                price_change_percentage_7d: data.market_data?.price_change_percentage_7d,
                price_change_percentage_30d: data.market_data?.price_change_percentage_30d,
                circulating_supply: data.market_data?.circulating_supply,
                total_supply: data.market_data?.total_supply,
                max_supply: data.market_data?.max_supply,
            },
            last_updated: data.last_updated,
            links: {
                homepage: data.links?.homepage?.filter(Boolean)?.[0],
                blockchain_sites: data.links?.blockchain_site?.filter(Boolean),
                official_forum_url: data.links?.official_forum_url?.filter(Boolean),
                subreddit_url: data.links?.subreddit_url,
                repos_url: data.links?.repos_url?.github?.filter(Boolean),
                twitter_screen_name: data.links?.twitter_screen_name,
                telegram_channel_identifier: data.links?.telegram_channel_identifier,
            },
            categories: data.categories?.filter(Boolean),
            genesis_date: data.genesis_date,
        };

        // Format numeric values for display
        const formatCurrency = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency.toUpperCase(),
            maximumFractionDigits: 8
        });

        const formatNumber = new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 2
        });

        const displayData = {
            ...formattedData,
            market_data: {
                ...formattedData.market_data,
                formatted: {
                    current_price: formatCurrency.format(formattedData.market_data.current_price[currency]),
                    market_cap: formatCurrency.format(formattedData.market_data.market_cap[currency]),
                    total_volume: formatCurrency.format(formattedData.market_data.total_volume[currency]),
                    high_24h: formatCurrency.format(formattedData.market_data.high_24h[currency]),
                    low_24h: formatCurrency.format(formattedData.market_data.low_24h[currency]),
                    price_change_percentage_24h: `${formatNumber.format(formattedData.market_data.price_change_percentage_24h)}%`,
                    price_change_percentage_7d: `${formatNumber.format(formattedData.market_data.price_change_percentage_7d)}%`,
                    price_change_percentage_30d: `${formatNumber.format(formattedData.market_data.price_change_percentage_30d)}%`,
                }
            }
        };

        return NextResponse.json({
            success: true,
            data: displayData,
            metadata: {
                currency: currency.toUpperCase(),
                lastUpdated: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ 
            success: false,
            error: error.message 
        }, { status: 500 });
    }
}