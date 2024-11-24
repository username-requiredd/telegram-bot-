import { NextResponse } from "next/server";

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export async function GET(request, { params }) {
    try {
        const coinId = params.coinId;
        
        // Validate coinId
        if (!coinId || typeof coinId !== 'string') {
            return NextResponse.json({ 
                success: false,
                error: 'Invalid cryptocurrency ID' 
            }, { status: 400 });
        }

        const { searchParams } = new URL(request.url);
        const days = searchParams.get('days') || '30';
        const currency = searchParams.get('currency') || 'usd';

        // Validate days parameter
        if (isNaN(days) || Number(days) <= 0) {
            return NextResponse.json({
                success: false,
                error: 'Invalid days parameter'
            }, { status: 400 });
        }
        
        const apiUrl = `${COINGECKO_BASE_URL}/coins/${coinId}/market_chart`;
        const urlWithParams = new URL(apiUrl);
        urlWithParams.searchParams.append('vs_currency', currency.toLowerCase());
        urlWithParams.searchParams.append('days', days);
        
        const response = await fetch(urlWithParams.toString(), {
            headers: {
                'Accept': 'application/json',
                'X-CG-Demo-API-Key': process.env.COINGECKO_API_KEY || '',
            },
            next: {
                revalidate: 300 
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`CoinGecko API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        
        if (!data.prices || !Array.isArray(data.prices)) {
            throw new Error('Invalid data format received from CoinGecko');
        }

        // Format  chart data with additional error checking
        const formattedData = data.prices.map(([timestamp, price]) => {
            const date = new Date(timestamp);
            if (!(date instanceof Date && !isNaN(date))) {
                throw new Error('Invalid timestamp in data');
            }
            
            if (typeof price !== 'number' || isNaN(price)) {
                throw new Error('Invalid price in data');
            }

            return {
                date: date.toISOString().split('T')[0], 
                timestamp,
                price: parseFloat(price.toFixed(2)),
                formattedPrice: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: currency.toUpperCase()
                }).format(price)
            };
        });

        return NextResponse.json({
            success: true,
            data: formattedData,
            metadata: {
                coin: coinId,
                currency: currency,
                days: Number(days),
                dataPoints: formattedData.length,
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