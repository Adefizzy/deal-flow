import {
  ChakraProvider,
  Grid,
  GridItem,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react';

import { NavBar } from './components/NavBar';
import TotalEarningsCard from './components/TotalEarningsCard';


import theme from './Themes/index';

export const App = () => {
 
  return (
    <ChakraProvider theme={theme}>
      <Grid minH='100vh' templateRows='1fr' templateColumns='1fr'>
        <GridItem>
          <NavBar />
          <Box p={5}>
            <Text variant='title'>Earnings</Text>
            <Flex mt={10} justifyContent='space-between'>
              <Box flexBasis='30%'>
                <TotalEarningsCard/>
              </Box>
              <Box flexBasis='68%' bgColor='yellow' height='80vw'></Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};


