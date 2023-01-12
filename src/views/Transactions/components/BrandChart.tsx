import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

import { brandingData } from '../tempData'


ChartJS.register(LinearScale, PointElement, Tooltip);

export const options = {
  maintainAspectRatio: false,
  layout: {
    padding: 0,
   
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

const BrandChart = () => {
  return <Bubble options={options} data={brandingData} />;
}

export default BrandChart;