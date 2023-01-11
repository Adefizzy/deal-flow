import { FormEvent } from 'react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';


const Clickable = (props: IClickable) => {
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if(props.onClick){
        props.onClick();
    }
  };
  return (
    <LinkBox height={props.height || '100%'}>
      <LinkOverlay href='' onClick={handleClick}>
        <>{props.children}</>
      </LinkOverlay>
    </LinkBox>
  );
};

export default Clickable;
