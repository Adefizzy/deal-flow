import { Flex, Text } from "@chakra-ui/react";

const DualColorText = ({ color }: { color: string }) => {
    return (
      <Flex alignItems='center' mt={1}>
        <Text variant='caption' fontWeight='600' color={color}>
          +2.0%
        </Text>
        <Text ml={1} variant='caption'>
          {' '}
          than last month
        </Text>
      </Flex>
    );
};

export default DualColorText;