import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { TodoActions } from './actions';

const useTodo = () => {
  const todoState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const create = useCallback((name: string) => dispatch(TodoActions.create(name)), [dispatch]);
  const remove = useCallback((id: number) => dispatch(TodoActions.delete(id)), [dispatch]);
  const update = useCallback((data: { id: number; name: string }) => dispatch(TodoActions.update(data)), [dispatch]);
  return {
    todoState,
    create,
    remove,
    update,
    // delete
  };
};

export default useTodo;
