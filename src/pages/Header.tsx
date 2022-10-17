/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unneeded-ternary */
import { Link, Outlet } from 'react-router-dom';
import styles from 'css/Header.module.css';
import { Toggle } from 'components';
import { useRecoilState } from 'recoil';
import { ThemeState } from 'store/recoil/theme/atom';

const Header = () => {
  const [theme, setTheme] = useRecoilState(ThemeState);
  const onChange = (value: boolean) => {
    setTheme(theme => {
      return {
        ...theme,
        color: value === true ? 'light' : 'dark',
      };
    });
  };
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div>
          <Link to="/"> 홈 </Link>
          <Toggle active={theme.color === 'light' ? true : false} onChange={onChange} />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
