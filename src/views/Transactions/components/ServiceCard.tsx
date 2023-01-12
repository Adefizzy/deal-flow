import { Flex, Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import CardWithTitle from "../../../components/CardWithTitle";
import DualColorText from './DualColorText';

const ServiceCard = ({ title, chart }: { title: string; chart: ReactNode }) => {
    return (
      <Box width='48%'>
        <CardWithTitle>
          <Flex justifyContent='space-between' width='100%' alignItems='center'>
            <Box flexBasis='50%'>
              <Text variant='largeBold'>$12,345</Text>
              <Text mt={2} variant='small'>
                {title}
              </Text>
              <DualColorText color='green' />
            </Box>
  
            {chart}
          </Flex>
        </CardWithTitle>
      </Box>
    );
  };

  export default ServiceCard