import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

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

interface ChartData {
  dates: string[];
  high: number[];
  low: number[];
  varBid: number[];
  pctChange: number[];
}

// const data: ChartData = {
//   dates: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
//   high: [1.2250, 1.2300, 1.2280, 1.2350, 1.2400, 1.2380, 1.2450],
//   low: [1.2200, 1.2150, 1.2180, 1.2100, 1.2150, 1.2170, 1.2250],
//   varBid: [0.0030, -0.0020, 0.0010, 0.0035, 0.0020, -0.0010, 0.0030],
//   pctChange: [0.25, -0.15, 0.10, 0.28, 0.16, -0.08, 0.25],
// };

const AUDChart =(data: ChartData) => {
  // console.log('AUDChart::', data)
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'High',
        data: data.high,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      {
        label: 'Low',
        data: data.low,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
      },
      {
        label: 'varBid',
        data: data.varBid,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: false,
      },
      {
        label: 'pctChange',
        data: data.pctChange,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        yAxisID: 'y-pct',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        position: 'left',
      },
      'y-pct': {
        type: 'linear',
        beginAtZero: true,
        position: 'right',
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'AUD - DOLAR AUSTRALIANO - Últimos 7 Dias',
      },
    },
  };
  

  return <Line data={chartData} options={options} />;
};

export { AUDChart }
