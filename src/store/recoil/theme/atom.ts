/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { atom, AtomEffect } from 'recoil';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export interface ITheme {
  color: 'light' | 'dark';
}
export const ThemeState = atom<ITheme>({
  key: 'Theme',
  default: {
    color: 'light',
  },
  effects: [localStorageEffect<ITheme>('Theme')],
});
