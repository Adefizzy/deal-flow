import { ResponsiveContainer, LineChart, Tooltip, Line } from 'recharts';
import { data } from '../tempData';



const LineChartWithoutAxis = (props: { stroke: string }) => {
 
  return (
    <ResponsiveContainer height='100%' width='100%'>
      <LineChart width={730} height={250} data={data}>
        <Tooltip />
        <Line dot={false} type='monotone' dataKey='uv' stroke={props.stroke} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartWithoutAxis;