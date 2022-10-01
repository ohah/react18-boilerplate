/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, {useState} from 'react';
import styled from 'styled-components';
export interface TabProps {
  title: React.ReactNode;
  content: React.ReactNode;
  enable?: boolean;
}
const TabButton = styled.button`
  border: 0;
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  &:focus {
    outline: 0;
    border: 0;
  }
  &.active {
    border-bottom: 2px solid blue;
  }
`;
const TabButtonWrapper = styled.div`
  display: flex;
`;
const Tab = ({data}: {data: TabProps[]}) => {
  const [index, setIndex] = useState(0);
  const tabChange = (i: number) => {
    setIndex(i);
  };
  return (
    <div>
      <TabButtonWrapper>
        {data.map((child, i) => {
          return (
            <TabButton className={i === index ? 'active' : ''} key={i} onClick={() => tabChange(i)}>
              {child.title}
            </TabButton>
          );
        })}
      </TabButtonWrapper>
      <div>
        {data
          .filter((child, i) => i === index)
          .map((child, i) => {
            return <div key={`tab-${i}`}>{child.content}</div>;
          })}
      </div>
    </div>
  );
};

export default Tab;
