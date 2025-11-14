"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { RiskRatingSummary } from "@/models/data";

interface RiskRatingChartProps {
  riskData: RiskRatingSummary;
}

export default function RiskRatingChart({ riskData }: RiskRatingChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const { risk_distribution } = riskData;
  
  const total = Object.values(risk_distribution).reduce((sum, count) => sum + count, 0);

  // Risk level colors
  const riskColors: Record<string, string> = {
    'Low': '#10B981',      // Green
    'Medium': '#F59E0B',   // Orange/Yellow
    'High': '#EF4444',     // Red
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Destroy previous chart instance if it exists
    Chart.getChart(ctx)?.destroy();

    const labels = Object.keys(risk_distribution);
    const data = Object.values(risk_distribution).map((count) => (count / total) * 100);
    const backgroundColors = labels.map((label) => riskColors[label] || '#6B7280');

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: backgroundColors,
            borderWidth: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.parsed;
                const count = Object.values(risk_distribution)[context.dataIndex];
                return `${label}: ${count} students (${value.toFixed(1)}%)`;
              }
            }
          }
        },
        cutout: "55%",
      },
    });
  }, [risk_distribution]);

  return (
    <div className="bg-white rounded-lg shadow-md py-8 px-11 w-fit h-full max-w-2xl flex flex-col md:flex-row items-center">
      <div className="w-64 h-64 relative z-0">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="md:ml-12 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-600 mb-6">Risk Ratings</h2>
        <div className="space-y-4">
          {Object.entries(risk_distribution).map(([level, count]) => {
            const percentage = ((count / total) * 100).toFixed(2);
            return (
              <div key={level} className="flex items-center">
                <span 
                  className="w-4 h-4 rounded-full mr-3" 
                  style={{ backgroundColor: riskColors[level] || '#6B7280' }}
                ></span>
                <span className="text-sm text-gray-600">
                  {`${level} Risk: ${count} (${percentage}%)`}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Total Students: {total}
          </p>
        </div>
      </div>
    </div>
  );
}

