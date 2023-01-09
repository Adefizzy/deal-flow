import { Box, StyleProps } from '@chakra-ui/react';


export const SmallCircle = (props:  StyleProps) => {
    return (
        <Box opacity='0.5' borderRadius='full' boxSize={{base: '4px', lg: '0.3vw'}} {...props}/>
    );
};