import { Box } from '@chakra-ui/react';
import { brandData } from '../tempData';

import CardWithTitle from '../../../components/CardWithTitle';
import SingleItemAndAmount from './SingleItemAndAmount';
import SocialMediaChart from './SocialMediaChart';

const SocialMediaCard = () => {
  const socialMediaDataList = brandData.map((data) => (
    <SingleItemAndAmount {...data} key={data.title} />
  ));

  return (
    <CardWithTitle
      title='Social Media'
      firstChildren={
        <Box width='19vw'>
          <SocialMediaChart />
        </Box>
      }
    >
      {socialMediaDataList}
    </CardWithTitle>
  );
};

export default SocialMediaCard;
