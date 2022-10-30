import axios from 'axios';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { ReactJson } from './Fetch';

export interface IforeCast {
  count: number;
  list: foreCastList[];
  message: string;
  code: string;
}
export interface foreCastList {
  /**
   * 날짜
   */
  sdate: string;
  /**
   * 시간
   */
  stime: string;
  /**
   * 전국교통량
   */
  cjunkook: string;
  /**
   * 지방방향 교통량
   */
  cjibangDir: string;
  /**
   * 서울방향 교통량
   * @type {string}
   */
  cseoulDir: string;
  /**
   * 서울->대전 소요시간
   * @type {string}
   */
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
}

const ForeCastWrapper = styled.div`
  /* display: flex; */
`;
const ForeCastColumn = styled.div`
  border: 1px solid #ddd;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 2fr));
  & div {
    /* box-sizing: content-box; */
    margin-top: -1px;
    margin-left: -1px;
    border: 1px solid #ddd;
  }
`;

const Forecast = () => {
  const { data, isError, isLoading } = useQuery('ReactDependency', () =>
    axios.get<IforeCast>('http://data.ex.co.kr/openapi/safeDriving/forecast?key=2970027921&type=json'),
  );
  if (isError) {
    return <div> 에러 </div>;
  }
  if (isLoading) {
    return <div> 로딩 중 </div>;
  }
  return (
    <ForeCastWrapper>
      {data &&
        data.data.list &&
        data.data.list.map(row => {
          return (
            <ForeCastColumn key={row.sdate}>
              <div>날짜</div>
              <div>{row.sdate}</div>
              <div>전국교통량</div>
              <div>{row.cjunkook}</div>
              <div>{row.cjibangDir}</div>
              <div>{row.sdate}</div>
            </ForeCastColumn>
          );
        })}
    </ForeCastWrapper>
  );
  // return <div style={{ whiteSpace: 'pre-wrap', padding: '10px' }}>{JSON.stringify(data?.data, null, 2)}</div>;
};

export default Forecast;
