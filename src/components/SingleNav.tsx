import { Link, Tooltip } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


const SingleNav = ({ path, icon, name }: { path: string, icon: React.ReactNode, name: string }) => {
  return (
    <Tooltip label={name}>
      <Link variant='normal' as={NavLink} to={path}>
        {icon}
      </Link>
      </Tooltip>
  );
};

export default SingleNav;
