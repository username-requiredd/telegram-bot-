import { NextResponse } from "next/server";

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const endpoint = searchParams.get('endpoint') || 'markets';

        let apiUrl;
        if (endpoint === 'list') {
            apiUrl = `${COINGECKO_BASE_URL}/coins/list`;
        } else if (endpoint === 'markets') {
            apiUrl = `${COINGECKO_BASE_URL}/coins/markets`;
            apiUrl += `?vs_currency=usd&order=market_cap_desc&per_page=20&sparkline=false&price_change_percentage=24h`;
        }

        const response = await fetch(apiUrl, {
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': process.env.COINGECKO_API_KEY || '',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return NextResponse.json({
            message: "success!",
            endpoint,
            data
        }, { status: 200 });

    } catch (error) {
        console.error('Fetch error:', error);
        return NextResponse.json({
            message: "Something went wrong",
            error: error.message || 'Unknown error'
        }, { status: 500 });
    }
}