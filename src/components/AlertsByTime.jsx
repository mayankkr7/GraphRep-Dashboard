import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AlertsByTime = ({ data }) => {
  const chartRef = useRef(null);
  const filteredData = data.filter(item => item.event_type === 'alert');
  const timestamps = filteredData.map(item => new Date(item.timestamp));
  const alertsCountByTime = timestamps.reduce((acc, timestamp) => {
    const date = timestamp.toISOString().split('T')[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(alertsCountByTime),
    datasets: [
      {
        label: 'Alerts by Time',
        data: Object.values(alertsCountByTime),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
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
      <h2 className="text-xl font-semibold mb-2">Alerts by Time</h2>
      <div className="chart-container" style={{ height: '450px', width: '100%' }}>
        <Line ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default AlertsByTime;
