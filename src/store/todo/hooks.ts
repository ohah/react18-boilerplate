/* eslint-disable import/prefer-default-export */
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { TodoState } from './atom';

export const useTodo = () => {
  const [todo, setTodo] = useRecoilState(TodoState);
  const create = useCallback(
    () => (name: string) => {
      setTodo((state) => {
        const idArray = state.map((todo) => todo.id);
        const id = idArray.length === 0 ? 1 : Math.max(...idArray) + 1;
        const inputData = [{ id: id, name: name }];
        return [...state, ...inputData];
      });
    },
    [todo],
  );
  const remove = (id: number) => {
    setTodo((state) => {
      return [...state.filter((todo) => id !== todo.id)];
    });
  };
  const update = (id: number, name: string) => {
    setTodo((state) => {
      const update = state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            name: name,
          };
        }
        return todo;
      });
      return [...update];
    });
  };
  return {
    todo,
    create,
    update,
    remove,
  };
};
