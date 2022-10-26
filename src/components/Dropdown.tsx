/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
export type DropdownValue = string | number;

interface DropdownProps {
  data:DropdownData[],
  onChange:(value:DropdownValue) => void
}
export interface DropdownData {
  title:string,
  value:DropdownValue
}

const Box = styled.div`
  border:1px solid #ddd;
  border-radius: 5px;
  min-width:100px;
  padding:5px 10px;

`

const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<DropdownValue>('드롭다운')
  console.log('props', props);
  const toogleDorpdown = () => {
    setOpen(!open);
  }
  useEffect(()=>{
    console.log('호출', value);
    props.onChange(value)
  },[value])
  return (
    <div>
      <Box onClick={toogleDorpdown}>{value}</Box>
      {open === true && 
        <>
          {Object.values(props.data).map((row, i)=> {
            return (
              <div key={i}>
                <div onClick={()=>setValue(row.value)}>{row.title}</div>
              </div>
            )
          })}
        </>
      }
    </div>
  );
};

export default Dropdown;
