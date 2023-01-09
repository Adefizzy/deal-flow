// @flow
import { Flex } from '@chakra-ui/react';
import { SmallCircle } from './SmallCircle';


export const CircleBg = () => {
  return (
    <Flex mt={2} width='20%' justifyContent='space-between'>
      <SmallCircle bgColor='white' />
      <SmallCircle bgColor='white' />
      <SmallCircle bgColor='white' />
      <SmallCircle bgColor='white' />
      <SmallCircle bgColor='white' />
    </Flex>
  );
};
