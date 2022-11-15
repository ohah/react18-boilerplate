import { useSetRecoilState } from 'recoil';
import { TodoState, ITodoState } from 'store/recoil/todo/atom';

import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export enum TODO_KEY {
  READ_TODO = 'READ_TODO',
}

export const useTodosQuery = () => {
  const setTodo = useSetRecoilState(TodoState);
  return useQuery(TODO_KEY.READ_TODO, () => axios.get<ITodoState[]>('/api/toddfo').then(({ data }) => data), {
    refetchOnWindowFocus: false,
    onSuccess: data => setTodo(data),
  });
};

export const useTodosCreateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((name: string) => axios.post<ITodoState[]>(`/api/todo`, { name }), {
    onSuccess: () => queryClient.invalidateQueries(TODO_KEY.READ_TODO),
  });
};

export const useTodosRemoveMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => axios.delete<ITodoState[]>(`/api/todo/${id}`), {
    onSuccess: () => queryClient.invalidateQueries(TODO_KEY.READ_TODO),
  });
};

export const useTodosUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, name }: { id: number; name: string }) => axios.put<ITodoState[]>(`/api/todo/${id}`, { name }),
    {
      onSuccess: () => queryClient.invalidateQueries(TODO_KEY.READ_TODO),
    },
  );
};

export const useTodos = () => {
  return {
    data: useTodosQuery().data,
    create: useTodosCreateMutation().mutate,
    update: useTodosUpdateMutation().mutate,
    remove: useTodosRemoveMutation().mutate,
  };
};
