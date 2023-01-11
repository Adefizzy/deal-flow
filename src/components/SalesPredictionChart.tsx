import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import colors from '../utils/colors';

const SalesPredictionChart = () => {
  const data = [
    {
      name: 'Jan',
      date: 'Jan 21th, 2020',
      uv: 4000,
      pv: 2400,
    },
    {
      name: 'Feb',
      date: 'Feb 8th, 2020',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Mar',
      date: 'March 1st, 2020',
      uv: 2000,
      pv: 9800,
    },
    {
      name: 'Apr',
      date: 'April 1st, 2020',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'May',
      date: 'May 13th, 2020',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Jun',
      date: 'June 29th, 2020',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Jul',
      date: 'July 21th, 2020',
      uv: 3490,
      pv: 4300,
    },
    {
      name: 'Aug',
      date: 'Aug 21th, 2020',
      uv: 3490,
      pv: 4300,
    },
    {
      name: 'Sept',
      date: 'Sept 21th, 2020',
      uv: 3490,
      pv: 4300,
    },
    {
      name: 'Oct',
      date: 'Oct 21th, 2020',
      uv: 3490,
      pv: 4300,
    },
    {
      name: 'Nov',
      date: 'Nov 21th, 2020',
      uv: 3490,
      pv: 4300,
    },
    {
      name: 'Dec',
      date: 'Dec 21th, 2020',
      uv: 3490,
      pv: 4300,
    },
  ];
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
