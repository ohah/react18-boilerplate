/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
// import google from 'google-one-tap';
import { useRecoilState } from 'recoil';
import { IKakaoToken, IKakaoUser, kakaoAuthState } from 'store/kakao/atom';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const useKakao = () => {
  const [kAuth, setkAuth] = useRecoilState(kakaoAuthState);
  const [kToken, setKToken] = useState<IKakaoToken>({} as IKakaoToken);
  const [params, setParmas] = useSearchParams();
  const code = params.get('code');

  if (code) {
    const f = new FormData();
    f.append('code', code);
    // f.append('response_type', 'code');
    f.append('grant_type', 'authorization_code');
    f.append('client_id', 'f04f16218867b9f1dcfa3b70dc3813ff');
    f.append('redirect_uri', 'http://localhost:5173/');
    axios<IKakaoToken>({
      url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=f04f16218867b9f1dcfa3b70dc3813ff&redirect_url=http://localhost:5173/&response_type=code&code=${code}`,
      method: 'post',
    }).then(async res => {
      setKToken(res.data);
      await (window as any).Kakao.Auth.setAccessToken(res.data.access_token);
      await getUser();
    });
  }
  const getUser = () => {
    (window as any).Kakao.API.request({
      url: '/v2/user/me',
    })
      .then((response: IKakaoUser) => {
        setkAuth({
          isLogin: true,
          user: {
            ...response,
          },
        });
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  const onLogin = () => {
    (window as any).Kakao.Auth.authorize({
      redirectUri: 'http://localhost:5173/',
      // client_id: 'f04f16218867b9f1dcfa3b70dc3813ff',
      // response_type: 'code',
    });
    // console.log('onLogin', login, params);
  };
  return {
    isLogin: kAuth.isLogin,
    user: kAuth.user,
    onLogin,
  };
};
