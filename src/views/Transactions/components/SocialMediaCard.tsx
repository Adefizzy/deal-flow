import { Box } from '@chakra-ui/react';
import { brandData } from '../tempData';

import CardWithTitle from '../../../components/CardWithTitle';
import SingleItemAndAmount from './SingleItemAndAmount';
import BarChartWithoutAxis from '../../../components/BarChartWithoutAxis';

const SocialMediaCard = () => {
  const socialMediaDataList = brandData.map((data) => (
    <SingleItemAndAmount {...data} key={data.title} />
  ));

  return (
    <CardWithTitle
      title='Social Media'
      firstChildren={
        <Box width='19vw'>
          <BarChartWithoutAxis />
        </Box>
      }
    >
      {socialMediaDataList}
    </CardWithTitle>
  );
};

export default SocialMediaCard;
