import { ReactNode } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

import DualColorText from "../views/Transactions/components/DualColorText";
import CardWithTitle from "./CardWithTitle";


export const InvertedServiceCard = ({
    title,
    chart,
  }: {
    title: string;
    chart: ReactNode;
  }) => {
    return (
      <Box width='fit-content'>
        <CardWithTitle>
          <Flex justifyContent='space-between' width='100%' alignItems='center'>
            {chart}
            <Box flexBasis='50%' ml={3}>
                <Text mt={2} variant='caption'>
                {title}
              </Text>
              <Text variant='largeBold'>12,345</Text>
              <DualColorText color='green' />
            </Box>
          </Flex>
        </CardWithTitle>
      </Box>
    );
  };