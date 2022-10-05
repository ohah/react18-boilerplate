/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  HTMLAttributes,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

const DropdownContext = createContext({
  defaultValue: '',
  setValue: (value: string | number) => {},
});

const DropdownWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  & button {
    border-radius: 5px;
    border: 1px solid gray;
    cursor: pointer;
    background: 0;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
`;
interface DropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const DropdownList = styled.li`
  list-style: none;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
const DropdownWrapperList = styled.ul`
  list-style: none;
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  top: calc(100% + 5px);
  right: 0;
  border: 1px solid gray;
  z-index: 50;
  background-color: #fff;
  border-radius: 5px;
  & ${DropdownWrapper} {
    border-bottom: 1px solid #ddd;
  }
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
      {props.children}
    </DropdownList>
  );
};
const Dropdown = (props: DropdownProps) => {
  const {children, ...others} = props;
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState<string | number>('');

  const defaultInit = {
    defaultValue: props.value ? `${props.value}` : '',
    setValue: (value: string | number) => setValue(value),
  };
  const dropdown = useRef<HTMLDivElement>(null);
  const closeDropdown = (e: MouseEvent) => {
    if (dropdown.current && !dropdown.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', closeDropdown);
    return () => {
      document.body.removeEventListener('click', closeDropdown);
    };
  }, []);
  useMemo(() => {
    setOpen(false);
  }, [value]);
  return (
    <DropdownContext.Provider value={defaultInit}>
      <DropdownWrapper ref={dropdown}>
        <input type="hidden" {...others} value={value || others.value} />
        <button type="button" onClick={() => setOpen(!isOpen)}>
          <span>{value || others.value} </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
          </svg>
        </button>
        {isOpen === true && <DropdownWrapperList>{children}</DropdownWrapperList>}
      </DropdownWrapper>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
