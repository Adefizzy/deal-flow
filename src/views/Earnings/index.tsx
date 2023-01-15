import { Flex, Box, Text } from '@chakra-ui/react';

import { earningTypes } from '../../tempData';

import CardWithTitle from '../../components/CardWithTitle';
import EarningsComparison from './components/EarningsComparison';
import SalesPredictionChart from './components/SalesPredictionChart';
import SingleEarningType from './components/SingleEarningType';
import TotalEarningsCard from './components/TotalEarningsCard';
import TopCountryCard from '../../components/TopCountryCard';





const Index = () => {
  const earningTypesList = earningTypes.map((item, index) => (
    <SingleEarningType index={index} {...item} key={item.type} />
  ));

  return (
    <>
      <Text variant='title'>Earnings</Text>
      <Flex height='69vh' mt={10} justifyContent='space-between'>
        <Flex
          flexBasis='30%'
          height='100%'
          flexDirection='column'
          justifyContent='space-between'
        >
          <TotalEarningsCard />
          <TopCountryCard/>
        </Flex>
        <Box flexBasis='68%' height='100%'>
          <EarningsComparison />
        </Box>
      </Flex>
      <Flex height='30vh' justifyContent='space-between'>
        <Box flexBasis='30%' height='100%'>
          <CardWithTitle height='100%' title='Earnings Type'>
            {earningTypesList}
          </CardWithTitle>
        </Box>
        <Box flexBasis='68%' height='100%'>
          <CardWithTitle height='100%' title='Sales Prediction'>
            <SalesPredictionChart />
            <Flex>
              <Box
                borderTopLeftRadius='md'
                borderBottomLeftRadius='md'
                bgColor='cyan'
                h='1vh'
                flexBasis='40%'
              />
              <Box bgColor='purple' h='1vh' flexBasis='30%' />
              <Box
                borderTopRightRadius='md'
                borderBottomRightRadius='md'
                bgColor='red'
                h='1vh'
                flexBasis='30%'
              />
            </Flex>
          </CardWithTitle>
        </Box>
      </Flex>
    </>
  );
};

export default Index;
