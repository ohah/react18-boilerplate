import { useCallback } from 'react';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { TodoState } from './atom';

const useTodo = () => {
  const [todoList, setTodo] = useRecoilState(TodoState);

  const create = useCallback(
    (name: string) => {
      setTodo(state => {
        const data = state.map(todo => todo.id);
        const id = data.length === 0 ? 1 : Math.max(...data) + 1;
        const inputData = [{ id: id, name: name }];
        return [...state, ...inputData];
      });
    },
    [todoList],
  );
  const remove = useCallback(
    (id: number) => {
      setTodo(state => {
        return [...state.filter(todo => id !== todo.id)];
      });
    },
    [todoList],
  );
  const update = useCallback(
    ({ id, name }: { id: number; name: string }) => {
      setTodo(state => {
        const update = state.map(todo => {
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
    },
    [todoList],
  );
  return {
    todoList: todoList,
    create,
    remove,
    update,
  };
};

export default useTodo;
