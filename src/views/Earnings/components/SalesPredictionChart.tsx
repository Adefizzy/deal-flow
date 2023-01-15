import {
    ResponsiveContainer,
    LineChart,
    Tooltip,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
  } from 'recharts';
  
import { data } from '../../../tempData';
import colors from '../../../utils/colors';

  
  const SalesPredictionChart = () => {
    return (
      <ResponsiveContainer height='90%' width='100%'>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey='name'
            tick={{ stroke: colors.gray2, strokeWidth: 0, fontSize: '0.6vw' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
              width={20}
            tick={{ stroke: colors.gray2, strokeWidth: 0, fontSize: '0.6vw' }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='pv'
            stroke={colors.purple}
            strokeDasharray='4 2'
            dot={{ strokeWidth: 0, r:5, fill: colors.purple }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default SalesPredictionChart;
  