import { Box } from '@chakra-ui/react';
import { webdevData } from '../tempData';

import CardWithTitle from '../../../components/CardWithTitle';
import WebDevChart from './WebDevChart';
import SingleItemAndAmount from './SingleItemAndAmount';

 const WebDevCard = () => {
  const webdevDataList = webdevData.map((data) => (
    <SingleItemAndAmount showIcon {...data} key={data.title} />
  ));

  return (
    <CardWithTitle
          noMarging
          title='Web Development'
          rightTitle='Service'
          leftTitle='Activity'
          firstChildren={
            <Box width='100%' fontSize='0.8vw' height='30vh'>
              <WebDevChart />
            </Box>
          }
        >
          {webdevDataList}
        </CardWithTitle>
  );
};

export default WebDevCard;