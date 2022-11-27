/* eslint-disable camelcase */
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { GoogleAuthState } from './atom';
import jwt_decode from 'jwt-decode';

const useGoogle = () => {
  const [gAuth, setGAuth] = useRecoilState(GoogleAuthState);

  const init = () => {
    console.log('init');
    google.accounts.id.initialize({
      client_id: '40957789666-126lt75vbca60rbr50if51s7j9o05kfu.apps.googleusercontent.com',
      callback: (res) => {
        const user = jwt_decode(res.credential);
        setGAuth({
          isLogin: true,
          user: user,
        });
        console.log(user);
      },
    });
  };
  const render = async (element: any) => {
    await init();
    console.log('element', element);
    await google.accounts.id.renderButton(element, {
      theme: 'outline',
      size: 'large',
      type: 'standard',
    });
    google.accounts.id.prompt();
  };

  return {
    init,
    render,
  };
};

export default useGoogle;
