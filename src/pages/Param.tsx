import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Param = () => {
  const param = useParams();
  console.log('param', param);
  const [sp, setSp] = useSearchParams();
  console.log(sp.get('b'));
  console.log(sp.values());
  return <div>{JSON.stringify(param)}</div>;
};

export default Param;
