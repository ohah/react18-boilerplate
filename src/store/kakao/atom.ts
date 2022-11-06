/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export interface IKakaoAuth {
  isLogin: boolean;
  user?: IKakaoUser;
}
export interface IKakaoToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export interface IKakaoUser {
  connected_at: string;
  id: number;
  kakao_account: {
    email_needs_agreement: boolean;
    has_email: boolean;
    profile?: {
      is_default_image: boolean;
      nickname: string;
      profile_image_url: string;
      thumbnail_image_url: string;
    };
    profile_image_needs_agreement: boolean;
    profile_nickname_needs_agreement: boolean;
    properties?: {
      nickname: string;
      profile_image: string;
      thumbnail_image: string;
    };
  };
}
export const kakaoAuthState = atom<IKakaoAuth>({
  key: 'login/kakao',
  default: {
    isLogin: false,
  },
});
