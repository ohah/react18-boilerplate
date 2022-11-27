import { atom } from 'recoil';

interface GoogleAuth {
  isLogin: boolean;
  user: any;
}

// export interface GoogleToken {
//   access_token: string;
//   token_type: string;
//   refresh_token: string;
//   expires_in: number;
//   scope: string;
//   refresh_token_expires_in: number;
// }

/* eslint-disable import/prefer-default-export */
export const GoogleAuthState = atom<GoogleAuth>({
  key: 'login/google',
  default: {
    isLogin: false,
    user: {},
  },
});
