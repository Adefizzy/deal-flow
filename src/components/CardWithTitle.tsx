import { Card } from './Card';
import { StyleConfig, Text,  } from '@chakra-ui/react';
import FaintTitle from './FaintTitle';


const CardWithTitle = (props: ICardWithTitle & StyleConfig) => {
  return (
    <Card mt={props.noMarging? 0 : 10} height={props?.height}>
      <Text variant='normalBold'>{props?.title}</Text>
      {props.firstChildren}
      {props.leftTitle && props.rightTitle && (
        <FaintTitle {...props}/>
      )}
      {props.children}
    </Card>
  );
};

export default CardWithTitle;



