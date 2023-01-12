import { ChakraProvider, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { paths } from './utils/paths';

import theme from './Themes/index';
import Earnings from './views/Earnings/loader';
import Transactions from './views/Transactions/loadable';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path={paths.home} element={<Layout />}>
          <Route index element={<Box>Coming soon</Box>} />
          <Route path={paths.users} element={<Box>Coming soon</Box>} />
          <Route path={paths.customers} element={<Box>Coming soon</Box>} />
          <Route path={paths.document} element={<Box>Coming soon</Box>} />
          <Route path={paths.statements} element={<Box>Coming soon</Box>} />
          <Route path={paths.userBehaviour} element={<Box>Coming soon</Box>} />
          <Route path={paths.trends} element={<Box>Coming soon</Box>} />
          <Route path={paths.transactions} element={<Transactions />} />
          <Route path={paths.earnings} element={<Earnings />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};
