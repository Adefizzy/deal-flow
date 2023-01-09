import { Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


const SingleNav = ({ path, icon }: { path: string, icon: React.ReactNode }) => {
  return (
      <Link variant='normal' as={NavLink} to={path}>
        {icon}
      </Link>
  );
};

export default SingleNav;
