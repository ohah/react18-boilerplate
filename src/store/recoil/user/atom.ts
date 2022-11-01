// d5820949eca1542d7e4d97c8adbce306de2287c4
// client_id
// e4085c19d31f41c3a214
/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export interface IUserState {
  token: string;
  [key: string]: string;
}

export const UserState = atom<IUserState>({
  key: 'user/State',
  default: {} as IUserState,
});
