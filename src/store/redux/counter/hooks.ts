import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { counterActions } from './actions';

const useReduxCounter = () => {
  const counterState = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const increase = () =>
    useCallback(() => {
      dispatch(counterActions.increase());
    }, [dispatch]);

  return {
    counterState,
    increase,
  };
};

export default useReduxCounter;
