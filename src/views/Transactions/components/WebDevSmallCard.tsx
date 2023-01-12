import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";

const WebDevSmallCard = () => {
    return (
        <ServiceCard
            title='Web Development'
            chart={
                <CircularProgress
                capIsRound
                value={75}
                color='purple'
                size='5vw'
                thickness='1vw'
              >
                <CircularProgressLabel fontSize='sm'>
                  75%
                </CircularProgressLabel>
              </CircularProgress>
            }
          />
    );
};

export default WebDevSmallCard;