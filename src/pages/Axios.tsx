import axios, { AxiosHeaders } from 'axios';
import { useEffect, useState } from 'react';
import { ReactJson } from './Fetch';
const Home = () => {
  const [text, setText] = useState<ReactJson>();
  const get = async () => {
    const result = await axios.get<ReactJson>('/api/react');
    setText(result.data);
  };
  useEffect(() => {
    get();
  }, []);
  return <div style={{ whiteSpace: 'pre-wrap', padding: '10px' }}>{JSON.stringify(text, null, 2)}</div>;
};

export default Home;
