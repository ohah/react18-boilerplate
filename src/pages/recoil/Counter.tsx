import { useRecoilState } from 'recoil';
import { counterState } from 'store/recoil/counter/atom';

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);
  return (
    <div>
      <button type="button" onClick={() => setCount(count => count + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setCount(count => count - 1)}>
        +2
      </button>
      <button type="button" onClick={() => setCount(count => count + 5)}>
        +5
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
