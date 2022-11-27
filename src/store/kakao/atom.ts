import { atom } from 'recoil';

interface KakaoAuth {
  isLogin: boolean;
  user: any;
}

export interface KakaoToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
}

/* eslint-disable import/prefer-default-export */
export const KakaoAuthState = atom<KakaoAuth>({
  key: 'login/kakao',
  default: {
    isLogin: false,
    user: {},
  },
});
