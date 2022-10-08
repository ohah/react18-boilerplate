import axios from 'axios';
import useSWR from 'swr';
import {ReactJson} from './Fetch';

const UseSWR = () => {
  const {data, error, isValidating} = useSWR('/api/user', () => axios.get<ReactJson>('/api/react'));
  if (error) {
    return <div> 에러 </div>;
  }
  if (isValidating) {
    return <div> 로딩 중 </div>;
  }
  return <div style={{whiteSpace: 'pre-wrap', padding: '10px'}}>{JSON.stringify(data?.data, null, 2)}</div>;
};

export default UseSWR;
