// @flow
import { Flex, Center, Text } from '@chakra-ui/react';

import getColor from '../../../utils/getColor';
import SmallCircle from '../../../components/SmallCircle';
import ProgressBar from '../../../components/ProgressBar';



 const SingleEarningType = (props: IEarningType) => {
  return (
    <Flex mt={4} justifyContent='space-between' alignItems='center'>
      <Flex flexBasis='35%' alignItems='center'>
        <SmallCircle isRing bgColor={getColor(props.index)} mr={2} />
        <Text variant='smallBold' fontSize='0.8vw'>{props.type}</Text>
      </Flex>
      <Center flexBasis='30%'>
        <ProgressBar value={props.progressValue} color={getColor(props.index)}/>
      </Center>
      <Flex flexBasis='23%' justifyContent='space-between'>
        <Text variant='small' color={getColor(props.index)}>{props.value}</Text>
        <Text variant='small'>/$10000</Text>
      </Flex>
    </Flex>
  );
};

export default SingleEarningType;
