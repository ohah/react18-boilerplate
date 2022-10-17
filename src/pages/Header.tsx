import { Link, Outlet } from 'react-router-dom';
import styles from 'css/Header.module.css';

const Header = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div>
          <Link to="/"> 홈 </Link>
          <Link to="/Covid"> 코로나 </Link>
          <Link to="/Submit"> 폼 </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
