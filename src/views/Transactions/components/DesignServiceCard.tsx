import { Box } from '@chakra-ui/react';
import { designServiceData } from '../tempData';

import CardWithTitle from '../../../components/CardWithTitle';
import SingleItemAndAmount from './SingleItemAndAmount';
import DesignServiceChart from './DesignServiceChart';

const DesignServiceCard = () => {
  
  const designServiceDataList = designServiceData.map((data) => (
    <SingleItemAndAmount showFooter {...data} key={data.title} />
  ));

  return (
    <CardWithTitle
    title='Design Service'
    rightTitle='Service'
    leftTitle='Activity'
    noMarging
    firstChildren={
      <Box width='100%' height='20vh'>
        <DesignServiceChart />
      </Box>
    }
  >
    {designServiceDataList}
  </CardWithTitle>
  );
};

export default DesignServiceCard;
