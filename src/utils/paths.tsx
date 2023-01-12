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
    { path: paths.home, icon: <World /> , name: 'Generic Statistics'},
    { path: paths.trends, icon: <ArrowUp /> , name: 'Trends'},
    { path: paths.customers, icon: <UserGroup />,  name: 'Customers' },
    { path: paths.document, icon: <Document />, name: 'Document' },
    { path: paths.users, icon: <User />,  name: 'Users'  },
    { path: paths.userBehaviour, icon: <Network /> ,  name: 'User Behaviour Flow' },
    { path: paths.transactions, icon: <DoubleArrow />,  name: 'Transactions'  },
    { path: paths.earnings, icon: <DollaCoin />,  name: 'Earnings'  },
  ];


