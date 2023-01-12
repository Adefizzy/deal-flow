import { Flex, Icon, chakra , Text} from '@chakra-ui/react';
import { GoTriangleUp } from 'react-icons/go';
import { Card } from '../../../components/Card';
import { CircleBg } from '../../../components/CircleBg';

const TotalEarningsCard = () => {
    return (
        <UniqueCard bgColor='purple' color='white' pt={0} height='38%'>
        <Flex justifyContent='center' alignItems='center' flexDirection='column'>
          <CircleBg/>
          <CircleBg/>
          <CircleBg/>
        </Flex>
        <Text mt={6} variant='smallLight'>Total Earnings</Text>
        <Text mt={2} variant='largeBold'>
          $12,345,678
        </Text>
        <Flex alignItems='center' mt={5}>
          <Icon color='green' as={GoTriangleUp} />
          <Text variant='smallBold' color='green'>
            +2.0%
          </Text>
          <Text ml={1} variant='small'>
            {' '}
            than last month
          </Text>
        </Flex>
      </UniqueCard>
    );
};

const UniqueCard = chakra(Card, {
    baseStyle: {
      backgroundImage: `url("./images/ovalRed.png"), url("./images/ovalYellow.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '105% 130%, 95% 110%',
    },
});


export default TotalEarningsCard