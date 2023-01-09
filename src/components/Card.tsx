import { Box, StyleProps } from '@chakra-ui/react';
import React from 'react';


export const Card = (props: StyleProps & React.PropsWithChildren) => {
    return (
        <Box width='100%' {...props} boxShadow='md' p={5} borderRadius='xl'>
           {props.children}
        </Box>
    );
};