import { Flex , Text} from "@chakra-ui/react";
import SmallCircle from "../../../components/SmallCircle";

const Legend = ({ label, value, color, mt, mb }: Record<string, string>) => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      mt={mt}
      mb={mb}
      width='20%'
    >
      <Flex alignItems='center'>
        <SmallCircle bgColor={color} mr={2} />
        <Text variant='xsmallLight'>{label}</Text>
      </Flex>
      <Text variant='smallBold'>{value}</Text>
    </Flex>
  );
};


export default Legend