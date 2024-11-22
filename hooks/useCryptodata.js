'use client';
import { useState, useEffect } from 'react';

export const useCryptoChart = (coinId, days = '30', currency = 'usd') => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `/api/gecko/${coinId}?days=${days}&currency=${currency}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                
                // if (!result) {
                //     throw new Error(result.error);
                // }

                setData(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (coinId) {
            fetchData();
        }
    }, [coinId, days, currency]);

    return { data, loading, error };
};

