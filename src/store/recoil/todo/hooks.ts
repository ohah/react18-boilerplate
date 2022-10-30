import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { TodoState, ITodoState } from 'store/recoil/todo/atom';
import axios from 'axios';
import { useQuery } from 'react-query';

const useTodo = () => {
  const [todoList, setTodo] = useRecoilState(TodoState);

  const readTodo = async () => {
    const { data } = await axios.get<ITodoState[]>(`/api/todo`);
    setTodo(data);
  };
  const create = useCallback(
    async (name: string) => {
      await axios.post<ITodoState[]>(`/api/todo`, { name });
      readTodo();
    },
    [todoList],
  );
  const remove = useCallback(
    async (id: number) => {
      await axios.delete<ITodoState[]>(`/api/todo/${id}`);
      readTodo();
    },
    [todoList],
  );
  const update = useCallback(
    async ({ id, name }: { id: number; name: string }) => {
      const { data } = await axios.put<ITodoState[]>(`/api/todo/${id}`, { name });
      readTodo();
    },
    [todoList],
  );
  return {
    todoList,
    create,
    remove,
    update,
    readTodo,
  };
};

export default useTodo;
