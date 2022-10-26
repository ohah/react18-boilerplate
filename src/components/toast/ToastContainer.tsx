import { ToastContext, ToastProps } from 'context/ToastContext';
import { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ShowAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%);
  }
`;

const color = {
  info: '#445ed3',
  success: '#2fc468',
  warning: '#cadb30',
  error: '#f80808',
  default: '#121a85',
};
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  margin: 0.75rem;
`;
const ToastStyle = styled.div<ToastProps>`
  color: #fff;
  background-color: ${props => color[props.type]};
  padding: 10px 10px;
  border-radius: 10px;
  &.show {
    animation: ${ShowAnimation} 0.2s;
  }
  &.hide {
    transform: translateX(150%);
    transition: transform 0.2s;
  }
`;
const Toast = (props: ToastProps) => {
  const { toast, queue, setQueue } = useContext(ToastContext);
  setTimeout(() => {
    setQueue(queue => {
      const autoClose = queue.filter(q => q.id !== props.id);
      return [...autoClose];
    });
  }, 3300);
  const [close, setClose] = useState<boolean>(false);
  setTimeout(() => {
    setClose(true);
  }, 3000);
  return (
    <ToastStyle key={props.id} {...props} className={close === false ? 'show' : 'hide'}>
      {props.message}
    </ToastStyle>
  );
};
export const ToastContainer = () => {
  const { toast, queue, setQueue } = useContext(ToastContext);
  return (
    <Wrapper>
      {queue.map(props => {
        return <Toast key={props.id} {...props} />;
      })}
    </Wrapper>
  );
};
export default ToastContainer;
