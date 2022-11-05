/* eslint-disable import/prefer-default-export */
import { selector } from 'recoil';
import { TodoState } from 'store/recoil/todo/atom';

export const TodoSelector = selector({
  key: 'todo/filter',
  get: ({ get }) => {
    const todo = get(TodoState);
    return {
      getReact: todo.filter(todo => todo.name.includes('react')),
      total: todo.length,
    };
  },
});
