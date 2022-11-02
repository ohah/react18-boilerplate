import { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { useQuery } from 'react-query';

const About = () => {
  const [data, setData] = useState<any>();
  const { data: _data, error, isLoading } = useQuery('react', () => axios.get('/api/react'));
  useEffect(() => {
    if (_data) {
      setData(data);
    }
  }, [_data]);
  if (isLoading) {
    return <div> 로딩중 </div>;
  }
  if (error) {
    return <div> 에러 발생! </div>;
  }
  if (_data) {
    return <div> 데이터 받아오는데 성공!</div>;
  }

  return <div> {JSON.stringify(data)} </div>;
};

export default About;
