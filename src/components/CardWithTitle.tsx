import { Card } from './Card';
import { Text, Flex } from '@chakra-ui/react';


const CardWithTitle = (props: ICardWithTitle) => {
  return (
    <Card mt={props.noMarging? 0 : 10} height={props?.height}>
      <Text variant='normalBold'>{props.title}</Text>
      {props.leftTitle && props.rightTitle && (
        <Flex mt={4} justifyContent='space-between'>
          <Text variant='smallFaded'>{props.leftTitle}</Text>
          <Text variant='smallFaded'>{props.rightTitle}</Text>
        </Flex>
      )}
      {props.children}
    </Card>
  );
};

export default CardWithTitle;
