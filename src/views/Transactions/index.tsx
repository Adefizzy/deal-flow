import {
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import {  services } from './tempData';
import { BrandingCard } from './components/BrandingCard';
import { SocialMediaSmallCard } from './components/SocialMediaSmallCard';

import TransactionsChart from './components/TransactionChart';
import SmallCircle from '../../components/SmallCircle';
import getColor from '../../utils/getColor';
import WebDevCard from './components/WebDevCard';
import SocialMediaCard from './components/SocialMediaCard';
import DesignServiceCard from './components/DesignServiceCard';
import DesignServiceSmallCard from './components/DesignServiceSmallCard';
import WebDevSmallCard from './components/WebDevSmallCard';
import BrandingSmallCard from './components/BrandingSmallCard';

const Index = () => {
  const servicesList = services.map((data, index) => (
    <Flex alignItems='center' ml={index === 0 ? 0 : 4}>
      <SmallCircle isRing bgColor={getColor(index)} mr={2} />
      <Text variant='small'>{data}</Text>
    </Flex>
  ));

  return (
    <Flex justifyContent='space-between'>
      <Box flexBasis='48%'>
        <Text variant='title'>Transactions</Text>
        <Flex mt={3}>{servicesList}</Flex>
        <Box mt={4} width='100%' height='40vh'>
          <TransactionsChart />
        </Box>

        <Flex justifyContent='space-between' width='100%'>
          <DesignServiceSmallCard />
          <WebDevSmallCard />
        </Flex>

        <Flex justifyContent='space-between' width='100%' alignItems='center'>
          <SocialMediaSmallCard />
          <BrandingSmallCard />
        </Flex>
      </Box>
      <Box flexBasis='24%' ml={5}>
        <DesignServiceCard />
        <SocialMediaCard />
      </Box>
      <Box flexBasis='24%' ml={5}>
        <WebDevCard />
        <BrandingCard />
      </Box>
    </Flex>
  );
};





export default Index;
