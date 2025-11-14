"use client";

import { RiskRatingSummary } from '@/models/data';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface RiskRatingSummaryProps {
    riskData: RiskRatingSummary;
}

const RiskRatingSummaryComponent = ({ riskData }: RiskRatingSummaryProps) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const { model_name, risk_distribution, classes } = riskData;

    // Calculate total and percentages
    const total = Object.values(risk_distribution).reduce((sum, count) => sum + count, 0);
    
    // Risk level colors
    const riskColors: Record<string, string> = {
        'Low': '#10B981',      // Green
        'Medium': '#F59E0B',   // Orange/Yellow
        'High': '#EF4444',     // Red
    };

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        // Destroy previous chart instance if it exists
        Chart.getChart(ctx)?.destroy();

        const labels = Object.keys(risk_distribution);
        const data = Object.values(risk_distribution);
        const backgroundColors = labels.map(label => riskColors[label] || '#6B7280');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Number of Students',
                        data,
                        backgroundColor: backgroundColors,
                        borderWidth: 0,
                        borderRadius: 8,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const value = context.parsed.y;
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${value} students (${percentage}%)`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                        },
                    },
                },
            },
        });
    }, [risk_distribution]);

    return (
        <div className="w-full p-6 shadow-lg rounded-lg border border-gray-200 bg-white">
            <div className="pb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Risk Rating Analysis</h2>
                <p className="text-sm text-gray-500 mt-1">{model_name}</p>
            </div>
            
            <div className="pt-6">
                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {Object.entries(risk_distribution).map(([level, count]) => {
                        const percentage = ((count / total) * 100).toFixed(1);
                        const bgColor = level === 'Low' ? 'bg-green-50 border-green-200' : 
                                       level === 'Medium' ? 'bg-yellow-50 border-yellow-200' : 
                                       'bg-red-50 border-red-200';
                        const textColor = level === 'Low' ? 'text-green-700' : 
                                         level === 'Medium' ? 'text-yellow-700' : 
                                         'text-red-700';
                        const iconColor = riskColors[level] || '#6B7280';
                        
                        return (
                            <div key={level} className={`p-4 rounded-lg border-2 ${bgColor}`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`text-sm font-medium ${textColor}`}>{level} Risk</p>
                                        <p className="text-2xl font-bold text-gray-800 mt-1">{count}</p>
                                        <p className="text-xs text-gray-600 mt-1">{percentage}% of total</p>
                                    </div>
                                    <div 
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: iconColor + '20' }}
                                    >
                                        <svg 
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke={iconColor} 
                                            viewBox="0 0 24 24"
                                        >
                                            {level === 'Low' ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            ) : level === 'Medium' ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            )}
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bar Chart */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">Risk Distribution Chart</h3>
                    <div style={{ height: '300px' }}>
                        <canvas ref={chartRef}></canvas>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    {classes.map((riskClass) => (
                        <div key={riskClass} className="flex items-center gap-2">
                            <div 
                                className="w-4 h-4 rounded" 
                                style={{ backgroundColor: riskColors[riskClass] || '#6B7280' }}
                            ></div>
                            <span className="text-sm text-gray-600">{riskClass} Risk</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RiskRatingSummaryComponent;

