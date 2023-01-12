import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import colors from '../../../utils/colors';

const data = [
  { name: 'Frontend', value: 2400, percent: '50%' },
  { name: 'Backend', value: 2400, percent: '50%' },
];

const WebDevChart = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={730} height={250}>
        <Tooltip />

        <Pie
          data={data}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          innerRadius={60}
          outerRadius={80}
          label={(value) => value.percent}
          startAngle={-100}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.name === 'Frontend' ? colors.cyan : colors.purple}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default WebDevChart;
