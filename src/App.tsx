import {
  ChakraProvider,
  Grid,
  GridItem,
  Box
} from '@chakra-ui/react';
import { Line, LineChart, Tooltip, ResponsiveContainer } from 'recharts';
import { NavBar } from './components/NavBar';

import theme from './Themes/index';
import Earnings from './views/Earnings';
import Transactions from './views/Transactions';


export const App = () => {
  

  return (
    <ChakraProvider theme={theme}>
      <Grid templateRows='1fr' templateColumns='1fr'>
        <GridItem>
          <NavBar />
          <Box p={5}>
            <Transactions/>
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

const TopCountryChart = () => {
  const data = [
    {
      name: 'Page A',
      uv: 1000,
      amt: 200,
    },
    {
      name: 'Page B',
      uv: 3000,
      amt: 22010,
    },
    {
      name: 'Page C',
      uv: 9000,
      amt: 10290,
    },
    {
      name: 'Page D',
      uv: 780,
      amt: 1000,
    },
    {
      name: 'Page E',
      uv: 11890,
      amt: 4181,
    },
    {
      name: 'Page F',
      uv: 2390,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 30490,
      amt: 9100,
    },
  ];
  return (
    <ResponsiveContainer height='100%' width='100%'>
      <LineChart width={730} height={250} data={data}>
        <Tooltip />
        <Line dot={false} type='monotone' dataKey='uv' stroke='#FBBA6D' />
      </LineChart>
    </ResponsiveContainer>
  );
};
