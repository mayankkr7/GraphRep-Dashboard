import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const AlertsBySeverity = ({ data }) => {
  const chartRef = useRef(null);
  const filteredData = data.filter(item => item.event_type === 'alert');
  const alertsCountBySeverity = filteredData.reduce((acc, alert) => {
    acc[alert.alert.severity] = (acc[alert.alert.severity] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(alertsCountBySeverity),
    datasets: [
      {
        label: 'Alerts by Severity',
        data: Object.values(alertsCountBySeverity),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Alerts by Severity</h2>
      <div className="chart-container" style={{ height: '450px', width: '100%' }}>
        <Pie ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default AlertsBySeverity;
