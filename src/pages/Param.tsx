/* eslint-disable no-restricted-globals */
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const Param = () => {
  const param = useParams();
  // const URL = new URL(location.href);
  const url = new URLSearchParams(location.search);
  const [para, setParap] = useSearchParams();
  const navigate = useNavigate();
  console.log(para.entries());
  para.forEach((value, key) => {
    console.log('tt', value, key);
  });
  const test = () => {
    navigate('/asdf');
  };
  console.log('url', url);
  console.log('page', url.get('page'));
  console.log('para', para.get('page'));
  console.log('param', param);
  if (param.query && !param.page) {
    return <div> 검색 </div>;
  }
  if (param.query && param.page) {
    return <div> 페이지까지 </div>;
  }
  return <div onClick={() => test()}> Param </div>;
};

export default Param;
