import { Button } from '@chakra-ui/react';

import CardWithTitle from '../../../components/CardWithTitle';
import SingleCountrySalesActivity from './SingleSalesCountryActivity';

import { topCountryStat } from '../../../tempData';

export const CountrySalesActivityCard = () => {

    const topCountryList = topCountryStat.map((item, index) => (
        <SingleCountrySalesActivity  index={index} {...item} key={item.country} />
      ));
      
    return (
        <CardWithTitle
        title='Country Sales Activity'
        rightTitle='Earnings'
        leftTitle='Country'
        middleTitle='Activity'
        height='58%'
        noMarging
      >
        {topCountryList}
        <Button mt={5}>View All</Button>
      </CardWithTitle>
    );
};