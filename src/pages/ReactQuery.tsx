import axios from 'axios';
import {useQuery} from 'react-query';
import {ReactJson} from './Fetch';

const ReactQuery = () => {
  const {data, isError, isLoading} = useQuery('ReactDependency', () => axios.get<ReactJson>('/api/react'));
  if (isError) {
    return <div> 에러 </div>;
  }
  if (isLoading) {
    return <div> 로딩 중 </div>;
  }
  return <div style={{whiteSpace: 'pre-wrap', padding: '10px'}}>{JSON.stringify(data?.data, null, 2)}</div>;
};

export default ReactQuery;
