import {
  ResponsiveContainer,
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import CustomTooltip from '../../../components/CustomTooltip';
import colors from '../../../utils/colors';
import { data } from '../data';

const EarningsComparisonChart = () => {
  
  return (
    <ResponsiveContainer height='100%' width='100%'>
      <BarChart width={730} height={250} data={data}>
        <Tooltip content={<CustomTooltip data={data}/>} />
        <CartesianGrid vertical={false} stroke={colors.gray2} />
        <XAxis
          dataKey='name'
          tick={{ stroke: colors.gray2, strokeWidth: 0, fontSize: '0.6vw' }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tick={{ stroke: colors.gray2, strokeWidth: 0, fontSize: '0.6vw' }}
          tickLine={false}
          axisLine={false}
          width={29}
        />
        <Tooltip />
        <Bar barSize={20} dataKey='pv' fill={colors.green} />
        <Bar barSize={20} dataKey='uv' fill={colors.purple} />
      </BarChart>
    </ResponsiveContainer>
  );
};



export default EarningsComparisonChart;
