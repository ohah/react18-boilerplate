import { useState } from 'react';
import reactLogo from 'assets/react.svg';
import './App.css';
import Tooltip from 'components/Tooltip';
import Dropdown, { DropdownData, DropdownValue } from 'components/Dropdown';
import * as Tab from 'components/Tab';

function App() {
  const onChange = (value:DropdownValue) => {
    console.log('상위 컴포넌트', value);
  }
  const list:DropdownData[] = [
    {
      title:"리액트",
      value:1,
    },
    {
      title:"Vue",
      value:2,
    },
    {
      title:"스벨트",
      value:3,
    },
  ]
  return (
    <div className="App">
      {/* <Tooltip title="asdf">
        <div> 툴팁 </div>
      </Tooltip> */}
      {/* <Dropdown
        data={list}
        onChange={onChange}
      /> */}
      <Tab.Wrapper>
        <Tab.List index={0}>
          리스트 0
        </Tab.List>
        <Tab.Panel index={0}>
          패널 0
        </Tab.Panel>
        <Tab.List index={1}>
          리스트 1
        </Tab.List>
        <Tab.Panel index={1}>
          패널 1
        </Tab.Panel>
        <Tab.List index={2}>
          리스트 2
        </Tab.List>
        <Tab.Panel index={2}>
          패널 2
        </Tab.Panel>
      </Tab.Wrapper>
    </div>
  );
}

export default App;
