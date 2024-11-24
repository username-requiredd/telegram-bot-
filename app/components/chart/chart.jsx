'use client';

import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const CryptoChart = ({ coinId, days = '30', currency = 'USD' }) => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const fetchChart = async () => {
            setLoading(true);
            setError(null);

            const url = `/api/coins/market-chart/${coinId}`;
            try {
                const response = await fetch(url, { signal });
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: Unable to fetch chart data.`);
                }
                const result = await response.json();

                if (!result.data || !Array.isArray(result.data)) {
                    throw new Error('Unexpected data format: "data" is not an array.');
                }

                const transformedData = result.data.map((item) => ({
                    date: item.date,
                    price: item.price,
                }));

                setChartData(transformedData);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchChart();

        return () => controller.abort();
    }, [retryCount, coinId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-800">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin shadow-lg"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 border border-gray-600 animate-fade-in">
                <div className="flex items-center text-red-400">
                    <svg
                        className="w-6 h-6 mr-3 animate-pulse"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-gray-300">{error}</span>
                    {retryCount < 3 && (
                        <button
                            onClick={() => setRetryCount((prev) => prev + 1)}
                            className="ml-2 text-sm underline text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                            Retry
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-96 bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform transition-all duration-300 hover:scale-[1.02]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke="#374151" 
                        strokeOpacity={0.5} 
                    />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                        tickLine={{ stroke: '#374151' }}
                        axisLine={{ stroke: '#374151' }}
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                        tickLine={{ stroke: '#374151' }}
                        axisLine={{ stroke: '#374151' }}
                        tickFormatter={(value) =>
                            new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency,
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }).format(value)
                        }
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1F2937',
                            border: '1px solid #374151',
                            borderRadius: '0.375rem',
                            padding: '0.5rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                            color: '#F3F4F6'
                        }}
                        formatter={(value) => [
                            new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency,
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }).format(value),
                            // <span className="text-gray-400">Price</span>,
                        ]}
                        labelStyle={{ color: '#9CA3AF' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#lineGradient)"
                        dot={false}
                        activeDot={{
                            r: 5,
                            fill: '#3B82F6',
                            stroke: '#1F2937',
                            strokeWidth: 2,
                            style: { filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.5))' }
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CryptoChart;