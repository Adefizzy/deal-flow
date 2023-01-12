import { Box } from "@chakra-ui/react";
import DesignServiceChart from "./DesignServiceChart";
import ServiceCard from "./ServiceCard";

const DesignServiceSmallCard = () => {
  return (
    <ServiceCard
      title='Design Service'
      chart={
        <Box width='10vw' height='10vh'>
          <DesignServiceChart />
        </Box>
      }
    />
  );
};

export default DesignServiceSmallCard;
