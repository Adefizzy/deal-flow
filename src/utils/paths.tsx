import {
    ArrowUp,
    DollaCoin,
    DoubleArrow,
    Document,
    Network,
    User,
    UserGroup,
    World,
  } from '../components/icons';

export const paths = {
    home: '/',
    trends: '/trends',
    customers: '/customers',
    statements: '/statements',
    users: '/users',
    userBehaviour: '/user-behaviour',
    transactions: '/transactions',
    earnings: '/earnings',
    document:'/document'
}


export const navObj = [
    { path: paths.home, icon: <World /> },
    { path: paths.trends, icon: <ArrowUp /> },
    { path: paths.customers, icon: <UserGroup /> },
    { path: paths.document, icon: <Document /> },
    { path: paths.users, icon: <User /> },
    { path: paths.userBehaviour, icon: <Network /> },
    { path: paths.transactions, icon: <DoubleArrow /> },
    { path: paths.earnings, icon: <DollaCoin /> },
  ];


