import { Flex, Text, Box } from '@chakra-ui/react';
import CardWithTitle from './CardWithTitle';
import EarningsComparisonChart from './EarningsComparisonChart';
import SmallCircle from './SmallCircle';

 const EarningsComparison = () => {
  return (
    <CardWithTitle noMarging height='100%' title='Earnings Comparison'>
      <Legend color='green' mt='10' value='$23,000' label='This Month'/>
      <Legend color='purple' mb='10' mt='2' value='$12,000' label='Last Month'/>
      <Box width='100%' height='65%'>
        <EarningsComparisonChart />
      </Box>
    </CardWithTitle>
  );
};

const Legend = ({label, value, color, mt, mb} : Record<string, string>) => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      mt={mt}
      mb={mb}
      width='20%'
    >
      <Flex alignItems='center'>
        <SmallCircle bgColor={color} mr={2} />
        <Text variant='xsmallLight'>{label}</Text>
      </Flex>
      <Text variant='smallBold'>{value}</Text>
    </Flex>
  );
};

export default EarningsComparison;
