import { Flex, Center, Text} from "@chakra-ui/react";

import LineChartWithoutAxis from "../../../components/LineChartWithoutAxis";
import getColor from "../../../utils/getColor";


 const SingleCountrySalesActivity = (props: ISingleTopCountry) => {
    return (
      <Flex mt={4} justifyContent='space-between' alignItems='center'>
        <Flex flexBasis='40%' alignItems='center'>
          <Text variant='smallBold'>{props.country}</Text>
        </Flex>
        <Flex flexBasis='40%' justifyContent='space-between'>
          <Text variant='smallBold'>{props.value}</Text>
        </Flex>
         <Center flexBasis='20%' height='2vh'>
          <LineChartWithoutAxis stroke={getColor(props.index)} />
        </Center>
      </Flex>
    );
  };

  export default SingleCountrySalesActivity;