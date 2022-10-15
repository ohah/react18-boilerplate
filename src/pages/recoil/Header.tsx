import { Link, Outlet } from 'react-router-dom';
import styles from 'css/Header.module.css';

const Header = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div>
          <Link to="/recoil/counter"> Counter </Link>
          <Link to="/recoil/todo"> Todo </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
