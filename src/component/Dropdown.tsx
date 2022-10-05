import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';

interface DropdownListProps {
  title: string;
  value: string;
}

interface DropdownProps {
  value: DropdownListProps[];
  onChange: (value: string) => void;
  defaultValue: string;
}

const Wrapper = styled.div`
  position: relative;
`;
interface SelectState {
  isShow: boolean;
}

const Select = styled.div<SelectState>`
  padding: 0.25rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  & svg {
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
    transform: ${props => (props.isShow ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const ShowAnimation = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;
const HideAnimation = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
    display:none;
  }
`;
const List = styled.ul`div`;
const ListWrapper = styled.ul<SelectState>`
  position: absolute;
  min-width: 5rem;
  border-radius: 5px;
  top: calc(100% + 5px);
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 1px 0.5px 0.2px 0 #ccc;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
  left: 0;
  animation: ${props => (props.isShow === true ? ShowAnimation : HideAnimation)} 0.2s linear;
  transform-origin: top center;
  animation-fill-mode: forwards;
  & ${List}:hover {
    background-color: #eee;
  }
  & ${List} {
    cursor: pointer;
    white-space: nowrap;
    border-bottom: 1px solid #ccc;
    padding: 0.27rem 0.75rem;
  }
  & ${List}:last-child {
    border-bottom: 0;
  }
`;

const Dropdown = ({value, onChange, defaultValue}: DropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  const [displayValue, setValue] = useState(defaultValue);
  const [isAnimation, setAnimation] = useState(false);
  const [time, setTime] = useState<ReturnType<typeof setTimeout>>();
  const selectedValue = (value: string) => {
    setAnimation(false);
    setValue(value);
    onChange(value);
    return value;
  };
  useEffect(() => {
    if (isAnimation === true) {
      clearTimeout(time);
      setOpen(true);
    } else if (isAnimation === false) {
      setTime(
        setTimeout(() => {
          setOpen(false);
        }, 200),
      );
    }
  }, [isAnimation]);
  return (
    <Wrapper>
      <Select isShow={isAnimation} onClick={() => setAnimation(!isAnimation)}>
        <span>{displayValue}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 16l-6-6h12z" />
        </svg>
      </Select>
      {isOpen && (
        <ListWrapper isShow={isAnimation}>
          {value.map(list => {
            return <List onClick={() => selectedValue(list.value)}>{list.title}</List>;
          })}
        </ListWrapper>
      )}
    </Wrapper>
  );
};

export default Dropdown;
