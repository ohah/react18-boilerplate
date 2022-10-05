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
  border-bottom: 1px solid #ccc;
  &:focus {
    outline: 0;
    border: 0;
  }
  &.active {
    border-bottom: 2px solid blue;
  }
  flex-grow: 1;
`;
const TabContent = styled.div`
  padding: 0.25rem 0.55rem;
`;
const TabButtonWrapper = styled.div`
  display: flex;
  min-width: 500px;
`;
const Wrapper = styled.div`
  border: 1px solid #ccc;
`;
const Tab = ({data}: {data: TabProps[]}) => {
  const [index, setIndex] = useState(0);
  const tabChange = (i: number) => {
    setIndex(i);
  };
  return (
    <Wrapper>
      <TabButtonWrapper>
        {data.map((child, i) => {
          return (
            <TabButton className={i === index ? 'active' : ''} key={i} onClick={() => tabChange(i)}>
              {child.title}
            </TabButton>
          );
        })}
      </TabButtonWrapper>
      <TabContent>
        {data
          .filter((child, i) => i === index)
          .map((child, i) => {
            return <div key={`tab-${i}`}>{child.content}</div>;
          })}
      </TabContent>
    </Wrapper>
  );
};

export default Tab;
