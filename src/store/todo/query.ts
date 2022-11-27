import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { TodoState } from './atom';

export enum TODO_KEY {
  READ_TODO = 'READ_TODO',
}

export const useTodosQuery = () => {
  const setTodo = useSetRecoilState(TodoState);
  return useQuery(TODO_KEY.READ_TODO, () => axios.get('/api/todo').then(({ data }) => data), {
    onSuccess: (data) => {
      setTodo(data);
    },
  });
};
export const useTodoCreateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((name: string) => axios.post(`/api/todo`, { name }), {
    onSuccess: () => {
      queryClient.invalidateQueries(TODO_KEY.READ_TODO);
    },
  });
};
export const useTodosRemoveMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => axios.delete(`/api/todo/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(TODO_KEY.READ_TODO);
    },
  });
};
export const useTodoUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, name }: { id: number; name: string }) => axios.put(`/api/todo/${id}`, { name }), {
    onSuccess: () => {
      queryClient.invalidateQueries(TODO_KEY.READ_TODO);
    },
  });
};

export const useTodos = () => {
  return {
    data: useTodosQuery().data,
    create: useTodoCreateMutation().mutate,
    remove: useTodosRemoveMutation().mutate,
    update: useTodoUpdateMutation().mutate,
  };
};
