import Tooltip from 'components/Tooltip';
import * as Tab from 'components/Tab';
import styled from 'styled-components';
import Toggle from 'components/Toggle';
import Pagination from 'components/Pagination';
import Modal from 'components/Modal';
import { useState } from 'react';
import { useToast } from 'components/toast/ToastContext';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';

const TooltipWrapper = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-flow: row;
  grid-gap: 1rem;
  grid-column-gap: 1rem;
  & ${TooltipWrapper} {
    display: flex;
    column-gap: 0.75rem;
    margin-top: 10px;
  }
`;

const Home = () => {
  const onChange = (page: number) => {
    console.log('page', page);
  };
  const [isModal, setModal] = useState<boolean>(false);
  const { toast } = useToast();
  const data = [
    { title: '툴팁', value: '툴팁' },
    { title: '패널', value: '패널' },
    { title: '드롭다운', value: '드롭다운' },
    { title: '토글', value: '토글' },
    { title: '페이지네이션', value: '페이지네이션' },
    { title: '모달', value: '모달' },
    { title: '토스트', value: '토스트' },
  ];

  const DropDownOnchange = (value: string) => {
    console.log(value);
  };

  return (
    <Grid>
      <Modal isShow={isModal} close={() => setModal(false)}>
        <Button type="button" onClick={() => setModal(false)}>
          모달창 닫기
        </Button>
      </Modal>
      <div>
        <Tab.Wrapper defaultIndex={5}>
          <Tab.Panel index={0}>툴팁</Tab.Panel>
          <Tab.Panel index={1}>패널</Tab.Panel>
          <Tab.Panel index={2}>드롭다운</Tab.Panel>
          <Tab.Panel index={3}>토글</Tab.Panel>
          <Tab.Panel index={4}>페이지네이션</Tab.Panel>
          <Tab.Panel index={5}>모달</Tab.Panel>
          <Tab.Panel index={6}>토스트</Tab.Panel>
          <Tab.Context index={0}>
            <TooltipWrapper>
              <Tooltip title="위" placement="top">
                top
              </Tooltip>
              <Tooltip title="아래" placement="bottom" arrow>
                bottom
              </Tooltip>
              <Tooltip title="왼쪽" placement="left" arrow>
                left
              </Tooltip>
              <Tooltip title="오른쪽" placement="right">
                right
              </Tooltip>
            </TooltipWrapper>
          </Tab.Context>
          <Tab.Context index={1}>컨테스트2</Tab.Context>
          <Tab.Context index={2}>
            <Dropdown value={data} label="Label" onChange={DropDownOnchange} />
          </Tab.Context>
          <Tab.Context index={3}>
            <Toggle active />
            <Toggle active={false} />
          </Tab.Context>
          <Tab.Context index={4}>
            <Pagination total={300} pageLimit={10} current={5} pageSize={1} onChange={onChange} />
          </Tab.Context>
          <Tab.Context index={5}>
            <Button type="button" onClick={() => setModal(true)}>
              모달
            </Button>
          </Tab.Context>
          <Tab.Context index={6}>
            <Button
              type="button"
              onClick={() => {
                toast('정보', { type: 'info', autoClose: 3000 });
              }}
            >
              info
            </Button>
            <Button
              type="button"
              onClick={() => {
                toast('성공', { type: 'success', autoClose: 3000 });
              }}
            >
              success
            </Button>
            <Button
              type="button"
              onClick={() => {
                toast('경고', { type: 'warning', autoClose: 3000 });
              }}
            >
              warning
            </Button>
            <Button
              type="button"
              onClick={() => {
                toast('에러', { type: 'error', autoClose: 3000 });
              }}
            >
              error
            </Button>
            <Button
              type="button"
              onClick={() => {
                toast('기본', { type: 'default', autoClose: 3000 });
              }}
            >
              default
            </Button>
          </Tab.Context>
        </Tab.Wrapper>
      </div>
    </Grid>
  );
};

export default Home;
