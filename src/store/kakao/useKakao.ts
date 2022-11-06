/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
// import google from 'google-one-tap';
import { useRecoilState } from 'recoil';
import { kakaoAuthState } from 'store/kakao/atom';
import jwt_decode from 'jwt-decode';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

interface IGoogleJWT {
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

export const useKakao = () => {
  const [kAuth, setkAuth] = useRecoilState(kakaoAuthState);
  const [params, setParmas] = useSearchParams();
  const code = params.get('code');

  if (code) {
    const f = new FormData();
    f.append('code', code);
    f.append('response_type', 'code');
    f.append('grant_type', 'authorization_code');
    f.append('client_id', 'f04f16218867b9f1dcfa3b70dc3813ff');
    f.append('redirect_uri', 'http://localhost:5173/');
    axios
      .post('https://kauth.kakao.com/oauth/token', f, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;',
        },
      })
      .then(res => {
        console.log('res', res);
      });
  }
  console.log('params', params.get('code'));
  const onLogin = () => {
    const login = (window as any).Kakao.Auth.authorize({
      redirectUri: 'http://localhost:5173/',
    });
    console.log('onLogin', login, params);
  };
  return {
    isLogin: kAuth.isLogin,
    user: kAuth.user,
    onLogin,
  };
};
