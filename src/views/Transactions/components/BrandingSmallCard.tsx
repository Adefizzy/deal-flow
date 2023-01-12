import { Box } from "@chakra-ui/react";
import BrandChart from "./BrandChart";
import ServiceCard from "./ServiceCard";

const BrandingSmallCard = () => {
    return (
        <ServiceCard
            title='Branding'
            chart={
                <Box width='10vw' height='10vh'>
                  <BrandChart />
                </Box>
            }
          />
    );
};


export default BrandingSmallCard;