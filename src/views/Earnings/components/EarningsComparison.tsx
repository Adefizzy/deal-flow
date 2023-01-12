import { Box } from '@chakra-ui/react';
import CardWithTitle from '../../../components/CardWithTitle';
import EarningsComparisonChart from './EarningsComparisonChart';
import Legend from './EarningsComparisonLegend';

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


export default EarningsComparison;
