import { Box } from '@chakra-ui/react';
import { brandData } from '../tempData';

import CardWithTitle from '../../../components/CardWithTitle';
import BrandChart from './BrandChart';
import SingleItemAndAmount from './SingleItemAndAmount';

export const BrandingCard = () => {
  const brandDataList = brandData.map((data) => (
    <SingleItemAndAmount {...data} key={data.title} />
  ));

  return (
    <CardWithTitle
      title='Branding'
      firstChildren={
        <Box width='19vw'>
          <BrandChart />
        </Box>
      }
    >
      {brandDataList}
    </CardWithTitle>
  );
};
