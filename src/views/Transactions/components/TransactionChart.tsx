import { ResponsiveContainer, LineChart, Tooltip, Line, XAxis, YAxis , CartesianGrid} from 'recharts';

import { transactionData } from '../tempData';

import colors from '../../../utils/colors';


const TransactionsChart = () => {
  return (
    <ResponsiveContainer height='100%' width='100%'>
      <LineChart width={730} height={250} data={transactionData}  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <CartesianGrid stroke={colors.gray3} />
        <Tooltip />
        <XAxis
         dataKey='name'
            tick={{ stroke: colors.gray2, strokeWidth: 0, fontSize: '0.6vw' }}
         stroke={colors.gray3} tickLine={false}/>
        <YAxis
         width={20}
            tick={{ stroke: colors.gray2, strokeWidth: 0, fontSize: '0.6vw' }}
         stroke={colors.gray3} tickLine={false}/>
        <Line dot={false} type='monotone' dataKey='Design Service' stroke={colors.purple} />
        <Line dot={false} type='monotone' dataKey='Web Development' stroke={colors.cyan} />
        <Line dot={false} type='monotone' dataKey='Social Media' stroke={colors.red} />
        <Line dot={false} type='monotone' dataKey='Branding' stroke={colors.yellow} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TransactionsChart;