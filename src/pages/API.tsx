import axios from 'axios';
import { useQuery } from 'react-query';

interface foreCastList {
  list: [
    {
      sdate: string;
      stime: string;
      cjunkook: string;
      cjibangDir: string;
      cseoulDir: string;
      csudj: string;
      csudg: string;
      csuus: string;
      csubs: string;
      csugj: string;
      csump: string;
      csukr: string;
      cdjsu: string;
      cdgsu: string;
      cussu: string;
      cbssu: string;
      cgjsu: string;
      cmpsu: string;
      ckrsu: string;
      csuyy: string;
      cyysu: string;
      csudj_bus: string;
      csudg_bus: string;
      csuus_bus: string;
      csubs_bus: string;
      csugj_bus: string;
      csump_bus: string;
      csukr_bus: string;
      csuyy_bus: string;
      cdjsu_bus: string;
      cdgsu_bus: string;
      cussu_bus: string;
      cbssu_bus: string;
      cgjsu_bus: string;
      cmpsu_bus: string;
      ckrsu_bus: string;
      cyysu_bus: string;
      code: string;
      message: string;
      count: string;
    },
  ];
}

const API = () => {
  const { data, isError, isLoading } = useQuery('forecast', () =>
    axios
      .get<foreCastList>(`http://data.ex.co.kr/openapi/safeDriving/forecast?key=2970027921&type=json`)
      .then(({ data }) => data),
  );
  console.log(data);
  return <div> {data && <div> {data.list[0].cbssu}</div>}</div>;
};

export default API;
