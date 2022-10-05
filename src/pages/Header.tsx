import {Link, Outlet} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/"> 홈 </Link>
      <Link to="/about"> 어바웃 </Link>
      <Link to="/profile"> 프로필 </Link>
      <Outlet />
    </div>
  );
};

export default Header;
