import { Flex, Text } from '@chakra-ui/react';

const FaintTitle = (props: Partial<ICardWithTitle>) => {
  return (
    <Flex mt={4} justifyContent='space-between'>
      <Text variant='smallFaded'>{props.leftTitle}</Text>
      <Text variant='smallFaded'>{props.rightTitle}</Text>
    </Flex>
  );
};

export default FaintTitle;
