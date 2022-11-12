/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { atom, AtomEffect } from 'recoil';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const counterState = atom<number>({
  key: 'counter/State',
  default: 0,
  effects: [localStorageEffect<number>('counter/State')],
});
