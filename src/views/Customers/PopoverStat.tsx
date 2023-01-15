import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
  Center,
  Icon,
  Text,
} from '@chakra-ui/react';
import { HiOutlineUser } from 'react-icons/hi';
import { getYCoordNum, getXCoordNum } from './helpers';

const PopOverStat = ({
  bgColor,
  x,
  y,
}: {
  bgColor: string;
  x: number;
  y: number;
}) => {
  return (
    <Popover trigger='hover' size='sm' isOpen={true} placement='top'>
      <PopoverTrigger>
        <Box
          width='0.1vw'
          height='0.1vw'
          borderRadius='md'
          position='absolute'
          top={getYCoordNum(y)}
          left={getXCoordNum(x)}
        />
      </PopoverTrigger>
      <PopoverContent width='fit-content'>
        <PopoverArrow />

        <PopoverBody width='fit-content'>
          <Flex alignItems='center'>
            <Center
              width='fit-content'
              bgColor={bgColor}
              p={2}
              borderRadius='lg'
            >
              <Icon as={HiOutlineUser} color='white' fontSize='1.5vw' />
            </Center>
            <Box ml={2}>
              <Text variant='smallBold'>1,222,333</Text>
              <Text variant='caption'>customer</Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverStat;
