import { render } from '@testing-library/react';
import Header from 'components/Header';
import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import useGoogle from 'store/google/hooks';
import useKakao from 'store/kakao/hooks';

const Root = () => {
  const { kAuth, Login } = useKakao();
  const { init, render } = useGoogle();

  const gLogin = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gLogin.current) {
      // console.log('google', gLogin.current);
      render(gLogin.current);
    }
  }, [gLogin]);

  return (
    <div>
      <Header />
      {/* <button type="button" onClick={() => Login()}>
        로그인
      </button>
      <div ref={gLogin}> 구글 로그인 </div>
      {JSON.stringify(kAuth)} */}
      <Outlet />
    </div>
  );
};

export default Root;
