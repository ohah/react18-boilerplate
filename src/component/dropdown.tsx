/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  Children,
  createContext,
  HTMLAttributes,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';

const DropdownContext = createContext({
  defaultValue: '',
  setValue: (value: string | number) => {},
});

const DropdownWrapper = styled.div`
  padding: 0.25rem 0.75rem;
  position: relative;
`;
interface DropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const DropdownList = styled.li`
  list-style: none;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
`;
const DropdownWrapperList = styled.ul`
  list-style: none;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 100%;
  left: 0;
`;

interface DropdownItemProps<T> extends HTMLAttributes<HTMLElement> {
  value: T;
  children: React.ReactNode;
}
export const DropdownItem = <T extends string | number>(props: DropdownItemProps<T>) => {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setValue(props.value);
  };
  const {defaultValue, setValue} = useContext(DropdownContext);
  return (
    <DropdownList onClick={onClick} data-value={props.value}>
      {' '}
      {props.children}{' '}
    </DropdownList>
  );
};
const Dropdown = (props: DropdownProps) => {
  const {children, ...others} = props;
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState<string | number>('');
  // const defaultInit = useMemo(
  //   () => ({
  //     defaultValue: props.value ? `${props.value}` : '',
  //     setValue: (value: string | number) => setValue(value),
  //   }),
  //   [value],
  // );
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const defaultInit = {
    defaultValue: props.value ? `${props.value}` : '',
    setValue: (value: string | number) => setValue(value),
  };
  useEffect(() => {
    setOpen(false);
  }, [value]);
  return (
    <DropdownContext.Provider value={defaultInit}>
      <input type="hidden" {...others} value={value || others.value} />
      <DropdownWrapper>
        <div onClick={() => setOpen(!isOpen)}> {value || others.value} </div>
        {isOpen === true && <DropdownWrapperList>{children}</DropdownWrapperList>}
      </DropdownWrapper>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
