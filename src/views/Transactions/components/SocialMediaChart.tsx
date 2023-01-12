import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import colors from '../../../utils/colors';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
  elements: {
    bar: {
      backgroundColor: colors.gray3,
      borderRadius: 5,
    },
  },
  scales: {
    y: {
      display: false
    },
    x: {
        display: false
      },
      
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: colors.purple,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: colors.cyan,
    },
  ],
};

const SocialMediaChart = () => {
  return <Bar options={options} data={data} />;
};

export default SocialMediaChart;
