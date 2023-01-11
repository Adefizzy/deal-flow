// @flow
import { Flex } from '@chakra-ui/react';
import SmallCircle  from './SmallCircle';


export const CircleBg = () => {
  return (
    <Flex mt={2} width='20%' justifyContent='space-between'>
      <SmallCircle opacity='0.5'  boxSize='0.3vw' bgColor='white' />
      <SmallCircle opacity='0.5'  boxSize='0.3vw' bgColor='white' />
      <SmallCircle opacity='0.5'  boxSize='0.3vw' bgColor='white' />
      <SmallCircle opacity='0.5' boxSize='0.3vw' bgColor='white' />
      <SmallCircle opacity='0.5'  boxSize='0.3vw' bgColor='white' />
    </Flex>
  );
};
