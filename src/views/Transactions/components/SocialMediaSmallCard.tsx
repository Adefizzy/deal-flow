import { Box } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import SocialMediaChart from "./SocialMediaChart";

export const SocialMediaSmallCard = () => {
    return (
        <ServiceCard
        title='Social Media'
        chart={
            <Box width='10vw' height='10vh'>
              <SocialMediaChart />
            </Box>
        }
      />
    );
};