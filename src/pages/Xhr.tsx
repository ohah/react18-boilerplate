import { useEffect, useState } from 'react';
import { ReactJson } from './Fetch';

interface xhrState<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
}

const Home = () => {
  const [text, setText] = useState<string>();
  const [state, setState] = useState<xhrState<Partial<ReactJson>>>({
    isLoading: false,
    isError: false,
    data: {},
  });
  const { isError, isLoading, data } = state;
  useEffect(() => {
    setState(state => {
      return {
        ...state,
        isLoading: true,
      };
    });
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
        setState(state => {
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: JSON.parse(xhr.responseText),
          };
        });
        setText(xhr.responseText);
      } else {
        setState(state => {
          return {
            ...state,
            isLoading: false,
            isError: true,
            data: {},
          };
        });
      }
    };
    xhr.open('GET', 'api/react');
    xhr.send();
  }, []);
  if (isError) {
    return <div> 에러 </div>;
  }
  if (isLoading) {
    return <div> 로딩 중 </div>;
  }
  return <div style={{ whiteSpace: 'pre-wrap', padding: '10px' }}>{JSON.stringify(data, null, 2)}</div>;
};

export default Home;
