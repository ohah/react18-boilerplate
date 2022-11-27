/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { TodoState } from './atom';

export const useTodo = () => {
  const [todo, setTodo] = useRecoilState(TodoState);
  const create = (name: string) => {
    axios.post(`/api/todo`, { name }).then(() => readTodo());
  };

  const readTodo = async () => {
    const data = await axios.get('/api/todo');
    setTodo(data.data);
  };

  const remove = (id: number) => {
    axios.delete(`/api/todo/${id}`).then(() => {
      readTodo();
    });
  };
  const update = (id: number, name: string) => {
    axios.put(`/api/todo/${id}`, { name }).then(() => {
      readTodo();
    });
    // UPDATE, DELETE, PUT, GET, POST
  };
  return {
    todo,
    create,
    update,
    remove,
    readTodo,
  };
};
