import { ResponsiveContainer, LineChart, Tooltip, Line } from 'recharts';
import colors from '../../../utils/colors';
import { data } from '../tempData';

const DesignServiceChart = () => {
 
  return (
    <ResponsiveContainer height='100%' width='100%'>
      <LineChart width={730} height={250} data={data}>
        <Tooltip />
        <Line dot={false} type='monotone' dataKey='uv' stroke={colors.purple} />
        <Line dot={false} type='monotone' dataKey='pv' stroke={colors.cyan} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DesignServiceChart;