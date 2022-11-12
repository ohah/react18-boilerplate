/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

interface ITodoState {
  id: number;
  name: string;
}

export const TodoState = atom<ITodoState[]>({
  key: 'todo/State',
  default: [],
});
