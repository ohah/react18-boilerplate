import 'App.css';
import { Tooltip, Listbox, Modal, Toast, Pagination, Toggle } from 'components';
import { EasyListBox, EasyTab } from 'components/Easy';
import { TabData } from 'components/Easy/Tab';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle` 
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  const data = [
    { title: '툴팁', value: '툴팁' },
    { title: '패널', value: '패널' },
    { title: '드롭다운', value: '드롭다운' },
    { title: '토글', value: '토글' },
    { title: '페이지네이션', value: '페이지네이션' },
    { title: '모달', value: '모달' },
    { title: '토스트', value: '토스트' },
  ];

  const tabData: TabData[] = [
    { title: 'Tab1', children: 'Tab1 내용' },
    { title: 'Tab2', children: <div>Tab2 내용</div> },
  ];

  const [selectedData, setSelectedData] = useState(data[1]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Toast.Context.Provider value={Toast.initialState()}>
      <div className="App">
        <GlobalStyles />
        <EasyTab data={tabData} />
        <EasyListBox value={selectedData} onChange={setSelectedData} data={data} />
        <Listbox value={selectedData} onChange={setSelectedData}>
          <Listbox.Button>{selectedData.value}</Listbox.Button>
          <Listbox.Options>
            {data.map(item => {
              const { title, value } = item;
              return (
                <Listbox.Option className="abc" key={title} value={item}>
                  {value}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Listbox>
        <button type="button" onClick={() => setIsOpen(true)}>
          열어
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header> 헤더 </Modal.Header>
          <Modal.Body>
            <Tooltip title="타이틀" position="right">
              툴팁
            </Tooltip>
          </Modal.Body>
          <Modal.Footer> 푸터 </Modal.Footer>
        </Modal>
        <Pagination total={300} pageLimit={10} current={5} pageSize={1} />
      </div>
      <Toggle active />
      <Toast.Container />
    </Toast.Context.Provider>
  );
}

export default App;
