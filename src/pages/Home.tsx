import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { counterActions } from 'store/counter/actions';
import useCounter from 'store/counter/hooks';

const Home = () => {
  // const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const { counterState, increase, increaseBy, decrease } = useCounter();
  const { count } = counterState;
  return (
    <div>
      <button type="button" onClick={() => dispatch(counterActions.increase())}>
        +1
      </button>
      <button type="button" onClick={() => decrease()}>
        +2
      </button>
      <button type="button" onClick={() => increaseBy(5)}>
        +5
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Home;
