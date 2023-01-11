import { Box } from '@chakra-ui/react';

const ProgressBar = ({value, color}: IProgressBar) => {
    return (
        <Box bgColor='gray2' width='100%' borderRadius='md'>
            <Box borderRadius='md' bgColor={color} width={`${value}%`} height='0.6vh'/>
        </Box>
    );
};

export default ProgressBar