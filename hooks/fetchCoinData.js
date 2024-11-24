'use client';
import { useState, useEffect, useCallback } from 'react';

export const useCryptoData = (coinId, options = {}) => {
    const { 
        currency = 'usd',
        refetchInterval = 0, 
        initialData = null,
    } = options;

    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(!initialData);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            setError(null);
            if (!data) setLoading(true);

            const url = new URL(`/api/coins/info/${coinId}`, window.location.origin);
            url.searchParams.append('currency', currency);

            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                },
                next: {
                    revalidate: 300
                }
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData.error || 
                    `Failed to fetch data: ${response.status} ${response.statusText}`
                );
            }

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to fetch cryptocurrency data');
            }

            setData(result.data);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching crypto data:', err);
        } finally {
            setLoading(false);
        }
    }, [coinId, currency]);

    useEffect(() => {
        fetchData();

        if (refetchInterval > 0) {
            const intervalId = setInterval(fetchData, refetchInterval);
            return () => clearInterval(intervalId);
        }
    }, [fetchData, refetchInterval]);

    const refetch = useCallback(() => {
        setLoading(true);
        return fetchData();
    }, [fetchData]);

    return { 
        data, 
        loading, 
        error,
        refetch,
        isStale: loading && !!data
    };
};

