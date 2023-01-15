import { Flex, Center, Icon, Text } from '@chakra-ui/react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

import getColor from '../utils/getColor';
import LineChartWithoutAxis from './LineChartWithoutAxis';
import SmallCircle from './SmallCircle';


export const SingleTopCountry = (props: ISingleTopCountry) => {
  return (
    <Flex mt={4} justifyContent='space-between' alignItems='center'>
      <Flex flexBasis={!props.hideChart ?'30%' : '50%'} alignItems='center'>
        <SmallCircle bgColor={getColor(props.index)} mr={2} />
        <Text variant='smallBold'>{props.country}</Text>
      </Flex>
      {!props.hideChart && <Center flexBasis='30%' height='2vh'>
        <LineChartWithoutAxis stroke={getColor(props.index)} />
      </Center>}
      <Flex flexBasis={!props.hideChart ?'23%': '35%' } justifyContent={!props.hideChart ? 'space-between': 'flex-start'}>
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


