import { Box, Text } from "@chakra-ui/react";

const CustomTooltip = (props: any) => {
    const  selectedDate  = props?.data.find((data: any) => data.name === props.label)
    return <Box bgColor='white' borderRadius='md' p={4} border='none'>
      <Text variant='smallBold'>56 Paid Invoices</Text>
      <Text variant='small' color='gray3'>{selectedDate?.date}</Text>
    </Box>;
};

export default CustomTooltip;