import { Flex, Box, Text } from '@chakra-ui/react';

import CardWithTitle from '../../components/CardWithTitle';
import EarningsComparison from './components/EarningsComparison';
import SalesPredictionChart from './components/SalesPredictionChart';
import SingleEarningType from './components/SingleEarningType';
import TotalEarningsCard from './components/TotalEarningsCard';

import { topCountryStat, earningTypes } from './data';
import { SingleTopCountry } from './components/SingleTopCountry';

const Index = () => {
  const topCountryList = topCountryStat.map((item, index) => (
    <SingleTopCountry index={index} {...item} key={item.country} />
  ));

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
          <CardWithTitle
            title='Top Country'
            rightTitle='Earnings'
            leftTitle='Country'
            height='58%'
            noMarging
          >
            {topCountryList}
          </CardWithTitle>
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
