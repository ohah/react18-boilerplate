/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { useRecoilState } from 'recoil';
import { googleAuthState } from 'store/recoil/google/atom';
import jwt_decode from 'jwt-decode';

export interface IGoogleJWT {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

export const useGoogle = () => {
  const [gAuth, setGAuth] = useRecoilState(googleAuthState);
  const init = () => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,

      callback: res => {
        const t = jwt_decode<IGoogleJWT>(res.credential);
        setGAuth(gauth => {
          return {
            ...gauth,
            isLogin: true,
            user: t,
          };
        });
      },
    });
  };
  window.onload = () => {
    init();
  };

  const render = async (element: HTMLElement) => {
    await init();
    google.accounts.id.renderButton(element, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
    });
    google.accounts.id.prompt(moment => {
      console.log('moment', moment);
    });
  };
  return {
    isLogin: gAuth.isLogin,
    user: gAuth.user,
    render,
  };
};
