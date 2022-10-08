import {Link, Outlet} from 'react-router-dom';
import styles from 'css/Header.module.css';

const Header = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div>
          <Link to="/"> 홈 </Link>
        </div>
        <div>
          <Link to="/xhr"> xhr </Link>
          <Link to="/fetch"> fetch </Link>
          <Link to="/fetch"> fetch </Link>
          <Link to="/axios"> axios </Link>
          <Link to="/react-query"> React-Query </Link>
          <Link to="/useSWR"> uswSWR </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
