import { Box, StyleProps, Center } from '@chakra-ui/react';


const SmallCircle = (props:  StyleProps & {isRing?: boolean} ) => {
    return (
        <Center borderRadius='full' boxSize={{base: '4px', lg: '0.6vw'}} {...props}>
            {props.isRing && <Box bgColor='white' borderRadius='full' boxSize={{base: '2px', lg: '0.2vw'}}  />}
        </Center>
    );
};

export default SmallCircle;