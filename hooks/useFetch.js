'use client';
import { useState, useEffect } from 'react';

export const useCryptoData = (endpoint, params = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const queryParams = new URLSearchParams({
                    endpoint,
                    ...params
                }).toString();

                const response = await fetch(`/api/coins?${queryParams}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                setData(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, ...Object.values(params)]);

    return { data, loading, error };
};

export const useMarketData = (currency = 'usd', perPage = 20) => {
    return useCryptoData('markets', {
        vs_currency: currency,
        per_page: perPage,
        order: 'market_cap_desc',
        sparkline: 'true',
        price_change_percentage: '1h,24h,7d'
    });
};