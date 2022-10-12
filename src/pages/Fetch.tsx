import { useEffect, useState } from 'react';

export interface ReactJson {
  dependencies: {
    react: number;
    'react-dom': number;
    'react-router-dom': number;
    'styled-reset': number;
  };
}

const Home = () => {
  const [text, setText] = useState<ReactJson>();
  useEffect(() => {
    fetch('/api/react')
      .then(res => res.json())
      .then(res => setText(res));
  }, []);
  return <div style={{ whiteSpace: 'pre-wrap', padding: '10px' }}>{JSON.stringify(text, null, 2)}</div>;
};

export default Home;
