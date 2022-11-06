/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

interface IKakaoAuth {
  isLogin: boolean;
  user?: any;
}
export const kakaoAuthState = atom<IKakaoAuth>({
  key: 'login/kakao',
  default: {
    isLogin: false,
  },
});
