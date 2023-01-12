import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar  from './NavBar';

export const Layout = () => {
    return (
        <Grid templateRows='1fr' templateColumns='1fr'>
        <GridItem>
          <NavBar />
          <Box p={5}>
           <Outlet/>
          </Box>
        </GridItem>
      </Grid>
    );
};