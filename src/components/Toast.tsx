/* eslint-disable no-bitwise */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-return-assign */
import React, { createContext, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

type ToastContextProps = ReturnType<typeof initialState>;

const Context = createContext<ToastContextProps>({} as never);

export const useToast = () => {
  return useContext(Context);
};

interface Iqueue {
  id: string;
  message: string;
  [key: string]: string;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  margin: 0.75rem;
`;
const Toast = styled.div<Iqueue>`
  color: #fff;
  background-color: #445ed3;
  padding: 0.25rem 0.75rem;
  border-radius: 10px;
`;

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : r & 0x3 || 0x8;
    return v.toString(16);
  });
}

const initialState = () => {
  const [queue, setQueue] = useState<Iqueue[]>([]);
  const toast = (message: string) => {
    setQueue(currQueue => {
      const newQueue: Iqueue = {
        id: `toast-${uuidv4()}`,
        message,
      };
      return [...currQueue, newQueue];
    });
  };
  return {
    toast,
    queue,
    setQueue,
  };
};

const Message = (props: Iqueue) => {
  const { setQueue } = useToast();
  useEffect(() => {
    setTimeout(() => {
      setQueue(currQueue => {
        const autoClose = currQueue.filter(q => q.id !== props.id);
        return [...autoClose];
      });
    }, 3000);
  });
  return (
    <Toast key={props.id} {...props}>
      {props.message}
    </Toast>
  );
};

export const Container = () => {
  const { queue } = useToast();
  return (
    <Wrapper>
      {queue.map(props => {
        return (
          <Message key={props.id} {...props}>
            {props.message}
          </Message>
        );
      })}
    </Wrapper>
  );
};

export default { useToast, Context, Container, initialState };
