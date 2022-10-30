/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unneeded-ternary */
import { Link, Outlet } from 'react-router-dom';
import styles from 'css/Header.module.css';
import { Toggle } from 'components';
import { useRecoilState } from 'recoil';
import { ITheme, ThemeState } from 'store/recoil/theme/atom';
import styled from 'styled-components';

const NavHeader = styled.header``;

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
  margin: 0;
  & ${NavHeader} {
    height: 60px;
    display: flex;
    column-gap: 10px;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #ddd;
    align-items: center;
  }
  & ${NavHeader} a {
    color: ${props => (props.theme.color === 'dark' ? 'white' : 'black')};
  }
  & ${NavHeader} a:hover {
    color: ${props => (props.theme.color === 'dark' ? 'gray' : 'blue')};
  }
`;

const Header = () => {
  const [theme, setTheme] = useRecoilState<ITheme>(ThemeState);
  const onChange = (value: boolean) => {
    setTheme(theme => {
      return {
        ...theme,
        color: value === true ? 'light' : 'dark',
      };
    });
  };
  return (
    <Wrapper>
      <NavHeader>
        <Link to="/"> 홈 </Link>
        <Toggle active={theme.color === 'light' ? true : false} onChange={onChange} />
      </NavHeader>
      <Outlet />
    </Wrapper>
  );
};

export default Header;
