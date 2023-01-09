import { Flex, Input, Divider, Box } from '@chakra-ui/react';
import { ArrowUp, Bell, DollaCoin, DoubleArrow,Document, Network, Settings, User, UserGroup, World } from './icons';

import SingleNav from './SingleNav';

const navObj = [
    { path: '/', icon: <World /> },
    { path: '/trends', icon: <ArrowUp /> },
    { path: '/customer', icon: <UserGroup /> },
    { path: '/document', icon: <Document /> },
    { path: '/users', icon: <User /> },
    { path: '/user-behaviour-flow', icon: <Network /> },
    { path: '/transactions', icon: <DoubleArrow /> },
    { path: '/earnings', icon: <DollaCoin /> },
];
  
export const NavBar = () => {
    const navList = navObj.map((nav) => (
        <SingleNav path={nav.path} icon={nav.icon} key={nav.path} />
      ));
      
    return (
        <Flex
            justifyContent='flex-end'
            alignItems='center'
            height='fit-content'
            width='100%'
            bgColor='white'
          >
            <Flex flexBasis='60%' alignItems='center'>
              <Box mr={10} flexBasis={{base:'50%', '2xl': '30%'}}>
                <Input placeholder='Search here...' />
              </Box>
              {navList}
            </Flex>
            <Divider height='40px' orientation='vertical' />
            <Flex
              alignItems='center'
              width='20%'
              justifyContent='space-between'
              pr={6}
              pl={4}
            >
              <Flex>
                <Bell />
                <Settings />
              </Flex>
              <Box bgColor='gray3' borderRadius='md' boxSize={{base: '3vw', '2xl': '2vw'}}></Box>
            </Flex>
          </Flex>
    );
};