/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export interface ITodoState {
  id: number;
  name: string;
}

export const TodoState = atom<ITodoState[]>({
  key: 'todo/State',
  default: [],
});
