import { Flex, Icon, Box, Text } from "@chakra-ui/react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const SingleItemAndAmount = ({
    showFooter,
    title,
    value,
    isGain,
    showIcon,
  }: ISingleItemAndAmount) => {
    return (
      <Flex justifyContent='space-between' alignItems='center' mt={4}>
        <Box>
          <Flex>
            {isGain && showIcon && (
              <Icon
                as={GoTriangleUp}
                bgColor='purple'
                color='white'
                borderRadius='sm'
                mr={1}
              />
            )}{' '}
            {showIcon && !isGain && (
              <Icon
                as={GoTriangleDown}
                bgColor='cyan'
                color='white'
                borderRadius='sm'
                mr={1}
              />
            )}
            <Text variant='smallBold'>{title}</Text>
          </Flex>
          {showFooter && <Text variant='caption'>2 March 2021, 13:45 PM</Text>}
        </Box>
  
        <Text variant='smallBold' color='purple'>
          ${value}
        </Text>
      </Flex>
    );
  };

  export default SingleItemAndAmount;