import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AlertsBySourceIP = ({ data }) => {
  const chartRef = useRef(null);
  const filteredData = data.filter(item => item.event_type === 'alert');
  const alertsCountBySourceIP = filteredData.reduce((acc, alert) => {
    acc[alert.src_ip] = (acc[alert.src_ip] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(alertsCountBySourceIP),
    datasets: [
      {
        label: 'Alerts by Source IP',
        data: Object.values(alertsCountBySourceIP),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
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
      <h2 className="text-xl font-semibold mb-2">Alerts by Source IP</h2>
      <div className="chart-container" style={{ height: '450px', width: '100%' }}>
        <Bar ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default AlertsBySourceIP;
