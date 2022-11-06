/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unneeded-ternary */
import { Link, Outlet } from 'react-router-dom';
import styles from 'css/Header.module.css';
import { Button, Toggle } from 'components';
import { useRecoilState } from 'recoil';
import { ITheme, ThemeState } from 'store/recoil/theme/atom';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useOldGoogle } from 'store/recoil/google/useOldGoogle';
import { useGoogle } from 'store/recoil/google/useGoogle';
import { useKakao } from 'store/kakao/useKakao';

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
  // const { isLogin, user, render } = useOldGoogle();
  const { isLogin, user, onLogin } = useKakao();
  const newGoogle = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log('누야호');
  //   if (newGoogle.current) {
  //     console.log('실행');
  //     render(newGoogle.current);
  //   }
  // }, [newGoogle]);
  // const { isLogin, user, render } = useGoogle();

  // useEffect(() => {
  //   if (newGoogle.current) {
  //     render(newGoogle.current);
  //   }
  // }, []);
  console.log('ref', newGoogle);
  return (
    <Wrapper>
      <NavHeader>
        <Link to="/"> 홈 </Link>
        <Link to="/Forecast"> 교통흐름 </Link>
        <Toggle active={theme.color === 'light' ? true : false} onChange={onChange} />
        <Button> 로그인 </Button>
        <div onClick={onLogin}>카카오</div>
        <div ref={newGoogle}>너는바본가</div>
      </NavHeader>
      {JSON.stringify(user)}
      <Outlet />
    </Wrapper>
  );
};

export default Header;
