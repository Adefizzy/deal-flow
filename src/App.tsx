import {
  ChakraProvider,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import { NavBar } from './components/NavBar';

import theme from './Themes/index';



export const App = () => {
 
  return (
    <ChakraProvider theme={theme}>
      <Grid minH='100vh' templateRows='1fr' templateColumns='1fr'>
        <GridItem>
         <NavBar/>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
