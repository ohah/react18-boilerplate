/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import styled from 'styled-components';

interface ListBoxData {
  title: string;
  value: string;
}

interface ListBoxProps {
  data: ListBoxData[];
  value: any;
  onChange: React.SetStateAction<ListBoxProps['value']>;
}

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`;
const Button = styled.button`
  display: block;
`;
const Lists = styled.ul<{ isShow: boolean }>`
  position: absolute;
  display: ${props => (props.isShow ? 'block' : 'none')};
  top: 100%;
  left: 0;
  min-width: 120px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  z-index: 1000;
  background: #fff;
`;
const List = styled.li`
  display: block;
  cursor: pointer;
  padding: 3px 8px;
  &:hover {
    background: #eeeeee;
  }
  &.active {
    background: #eeeeee;
  }
`;

const ListBox = ({ data, value, onChange }: ListBoxProps) => {
  const onSelect = (newValue: ListBoxData) => {
    onChange(newValue);
    setShow(false);
  };
  const Toggle = () => {
    setShow(!isShow);
  };
  const [isShow, setShow] = useState(false);
  return (
    <Wrapper>
      <Button onClick={() => Toggle()}>{value.title}</Button>
      <Lists isShow={isShow}>
        {data.map(row => {
          const { title: rowTitle, value: rowValue } = row;
          return (
            <List
              key={rowTitle}
              className={Object.keys(value).every(key => row[key as never] === value[key]) ? 'active' : ''}
              onClick={() => onSelect(row)}
            >
              {rowValue}
            </List>
          );
        })}
      </Lists>
    </Wrapper>
  );
};

export default ListBox;
