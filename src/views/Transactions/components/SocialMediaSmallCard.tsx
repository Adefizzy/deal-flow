import { Box } from "@chakra-ui/react";

import BarChartWithoutAxis from "../../../components/BarChartWithoutAxis";
import ServiceCard from "./ServiceCard";


export const SocialMediaSmallCard = () => {
    return (
        <ServiceCard
        title='Social Media'
        chart={
            <Box width='10vw' height='10vh'>
              <BarChartWithoutAxis />
            </Box>
        }
      />
    );
};