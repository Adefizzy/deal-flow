import { Box, Text } from '@chakra-ui/react';
import {
  ResponsiveContainer,
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import colors from '../utils/colors';

const EarningsComparisonChart = () => {
  const data = [
    {
      name: 'Jan',
      date:'Jan 21th, 2020',
      uv: 4000,
      pv: 2400,

    },
    {
      name: 'Feb',
      date:'Feb 8th, 2020',
      uv: 3000,
      pv: 1398,

    },
    {
      name: 'Mar',
      date:'March 1st, 2020',
      uv: 2000,
      pv: 9800,

    },
    {
      name: 'Apr',
      date:'April 1st, 2020',
      uv: 2780,
      pv: 3908,

    },
    {
      name: 'May',
      date:'May 13th, 2020',
      uv: 1890,
      pv: 4800,

    },
    {
      name: 'Jun',
      date:'June 29th, 2020',
      uv: 2390,
      pv: 3800,
  
    },
    {
      name: 'Jul',
      date:'July 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Aug',
      date:'Aug 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Sept',
      date:'Sept 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Oct',
      date:'Oct 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Nov',
      date:'Nov 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
    {
      name: 'Dec',
      date:'Dec 21th, 2020',
      uv: 3490,
      pv: 4300,

    },
  ];
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

const CustomTooltip = (props: any) => {
  const  selectedDate  = props?.data.find((data: any) => data.name === props.label)
  console.log({ selectedDate })
  return <Box bgColor='white' borderRadius='md' p={4} border='none'>
    <Text variant='smallBold'>56 Paid Invoices</Text>
    <Text variant='small' color='gray3'>{selectedDate?.date}</Text>
  </Box>;
};

export default EarningsComparisonChart;
