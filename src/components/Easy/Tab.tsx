import { useMemo, useState } from 'react';
import styled from 'styled-components';

export interface TabData {
  title: string;
  children: React.ReactNode | string;
}

interface TabProps {
  data: TabData[];
  index?: number;
}

const TabHeader = styled.ul`
  display: flex;
  border-bottom: 1px solid #ccc;
`;
const TabButton = styled.li`
  display: flex;
  list-style: none;
  cursor: pointer;
  flex-grow: 1;
  padding: 10px;
  &.active {
    border-bottom: 2px solid #1976d2;
    color: #1976d2;
  }
`;
const TabContextWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const TabWrapper = styled.div`
  border: 1px solid #ccc;
`;

const Tab = ({ data, index }: TabProps) => {
  const [nowIndex, setNowIndex] = useState<number>(index || 0);
  const { children } = useMemo(() => data[nowIndex], [nowIndex]);
  return (
    <TabWrapper>
      <TabHeader>
        {data.map((row, i) => (
          <TabButton key={row.title} className={i === nowIndex ? 'active' : ''} onClick={() => setNowIndex(i)}>
            {row.title}
          </TabButton>
        ))}
      </TabHeader>
      <TabContextWrapper>{children}</TabContextWrapper>
    </TabWrapper>
  );
};

export default Tab;
