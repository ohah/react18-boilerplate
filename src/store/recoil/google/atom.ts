/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

interface IGoogleAuth {
  isLogin: boolean;
  user?: any;
}
export const googleAuthState = atom<IGoogleAuth>({
  key: 'login/google',
  default: {
    isLogin: false,
  },
});
