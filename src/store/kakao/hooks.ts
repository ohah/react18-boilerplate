import axios from 'axios';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { KakaoAuthState, KakaoToken } from './atom';

const useKakao = () => {
  const [kAuth, setKAuth] = useRecoilState(KakaoAuthState);
  const [kToken, setKToken] = useState<KakaoToken>({} as KakaoToken);
  const [params, setParmas] = useSearchParams();
  const code = params.get('code');

  if (code) {
    const f = new FormData();
    f.append('grant_type', 'authorization_code');
    f.append('client_id', 'f04f16218867b9f1dcfa3b70dc3813ff');
    f.append('redirect_uri', 'http://localhost:5173');
    f.append('code', code);

    axios<KakaoToken>({
      // url: 'https://kauth.kakao.com/oauth/token',
      // data: f,
      url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=f04f16218867b9f1dcfa3b70dc3813ff&redirect_uri=http://localhost:5173&code=${code}`,
      method: 'POST',
    }).then(async (res) => {
      // setKToken(res.data);
      await Kakao.Auth.setAccessToken(res.data.access_token);
      console.log();
      await getUser();
    });
  }
  const Login = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:5173',
    });
  };
  const getUser = () => {
    Kakao.API.request({
      url: '/v2/user/me',
    })
      .then(function (response: any) {
        setKAuth((kAuth) => {
          return {
            ...kAuth,
            isLogin: true,
            user: response,
          };
        });
        // axios.defaults.headers = {
        // }
        console.log('response', response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return {
    kAuth,
    Login,
  };
};

export default useKakao;
