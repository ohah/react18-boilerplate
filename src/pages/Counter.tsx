/* eslint-disable react/button-has-type */
import { useRecoilState } from 'recoil';
import useReduxCounter from 'store/redux/counter/hooks';

const Counter = () => {
  // const [count, setCount] = useRecoilState(counterState);

  const { counterState, increase } = useReduxCounter();

  return (
    <div>
      <button onClick={() => increase()}> 증가 + 1</button>
      <div>{counterState}</div>
      {/* <button onClick={() => setCount(count + 1)}> 증가 + 1</button>
      <button onClick={() => setCount(count - 1)}> 감소 - 1</button>
      카운터 : {count} */}
    </div>
  );
};

export default Counter;
