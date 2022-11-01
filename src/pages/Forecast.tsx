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
  /**
   * 서울->대구 소요시간
   * @type {string}
   */
  csudg: string;
  /**
   * 서울->울산 소요시간
   * @type {string}
   */
  csuus: string;
  /**
   * 서울->부산 소요시간
   * @type {string}
   */
  csubs: string;
  /**
   * 서울->광주 소요시간
   * @type {string}
   */
  csugj: string;
  /**
   * 서울->목포 소요시간
   * @type {string}
   */
  csump: string;
  /**
   * 서울->강릉 소요시간
   * @type {string}
   */
  csukr: string;
  /**
   * 대전->서울 소요시간
   * @type {string}
   */
  cdjsu: string;
  /**
   * 대구->서울 소요시간
   * @type {string}
   */
  cdgsu: string;
  /**
   * 울산->서울 소요시간
   * @type {string}
   */
  cussu: string;
  /**
   * 부산->서울 소요시간
   * @type {string}
   */
  cbssu: string;
  /**
   * 광주->서울 소요시간
   * @type {string}
   */
  cgjsu: string;
  /**
   * 목포->서울 소요시간
   * @type {string}
   */
  cmpsu: string;
  /**
   * 강릉->서울 소요시간
   * @type {string}
   */
  ckrsu: string;
  /**
   * 남양주->양양 소요시간
   * @type {string}
   */
  csuyy: string;
  /**
   * 양양->남양주 소요시간
   * @type {string}
   */
  cyysu: string;
  /**
   * 서울->대전 버스 소요시간
   * @type {string}
   */
  csudj_bus: string;
  /**
   * 서울->대구 소요시간
   * @type {string}
   */
  csudg_bus: string;
  /**
   * 서울->울산 소요시간
   * @type {string}
   */
  csuus_bus: string;
  /**
   * 서울->부산 버스 소요시간
   * @type {string}
   */
  csubs_bus: string;
  /**
   * 서울->광주 버스 소요시간
   * @type {string}
   */
  csugj_bus: string;
  /**
   * 서울->목포 버스 소요시간
   * @type {string}
   */
  csump_bus: string;
  /**
   * 서울->강릉 버스 소요시간
   * @type {string}
   */
  csukr_bus: string;
  /**
   * 남양주->양양 버스 소요시간
   * @type {string}
   */
  csuyy_bus: string;
  /**
   * 대전->서울 버스 소요시간
   * @type {string}
   */
  cdjsu_bus: string;
  /**
   * 대구->서울 버스 소요시간
   * @type {string}
   */
  cdgsu_bus: string;
  /**
   * 울산->서울 버스 소요시간
   * @type {string}
   */
  cussu_bus: string;
  /**
   * 부산->서울 버스 소요시간
   * @type {string}
   */
  cbssu_bus: string;
  /**
   * 광주->서울 버스 소요시간
   * @type {string}
   */
  cgjsu_bus: string;
  /**
   * 목포->서울 버스 소요시간
   * @type {string}
   */
  cmpsu_bus: string;
  /**
   * 강릉->서울 버스 소요시간
   * @type {string}
   */
  ckrsu_bus: string;
  /**
   * 양양->남양주 버스 소요시간
   * @type {string}
   */
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
              <div>시간</div>
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
