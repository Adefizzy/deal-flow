import { Flex, Center, Icon, Text } from '@chakra-ui/react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import getColor from '../../../utils/getColor';
import SmallCircle from '../../../components/SmallCircle';
import TopCountryChart from './TopCountryChart';


export const SingleTopCountry = (props: ISingleTopCountry) => {
  return (
    <Flex mt={4} justifyContent='space-between' alignItems='center'>
      <Flex flexBasis='30%' alignItems='center'>
        <SmallCircle bgColor={getColor(props.index)} mr={2} />
        <Text variant='smallBold'>{props.country}</Text>
      </Flex>
      <Center flexBasis='30%' height='2vh'>
        <TopCountryChart stroke={getColor(props.index)} />
      </Center>
      <Flex flexBasis='23%' justifyContent='space-between'>
        {props.gain ? (
          <Icon mr={1} color='green' as={GoTriangleUp} />
        ) : (
          <Icon mr={1} color='red' as={GoTriangleDown} />
        )}
        <Text variant='smallBold'>{props.value}</Text>
      </Flex>
    </Flex>
  );
};
