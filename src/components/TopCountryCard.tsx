import { topCountryStat } from "../tempData";
import { SingleTopCountry } from "./SingleTopCountry";

import CardWithTitle from "./CardWithTitle";

const TopCountryCard = ({hideChart}:{hideChart?: boolean}) => {

    const topCountryList = topCountryStat.map((item, index) => (
        <SingleTopCountry hideChart={hideChart} index={index} {...item} key={item.country} />
      ));
      
    return (
        <CardWithTitle
        title='Top Country'
        rightTitle='Earnings'
        leftTitle='Country'
        height='58%'
        noMarging
      >
        {topCountryList}
      </CardWithTitle>
    );
};





export default TopCountryCard;