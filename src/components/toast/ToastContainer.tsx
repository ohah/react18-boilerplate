import { ToastContext, ToastProps } from 'context/ToastContext';
import { useCallback, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ShowAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%);
  }
`;
const CloseAnimation = keyframes`
  0% {
    transform: translateX(0%)
  }
  100% {
    transform: translateX(100%);
    display:none;
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
const Toast = styled.div<ToastProps>`
  color: #fff;
  background-color: ${props => color[props.type]};
  padding: 10px 10px;
  border-radius: 10px;
  animation: ${props => (props.close === false ? ShowAnimation : CloseAnimation)} 0.1s linear;
`;
export const ToastContainer = () => {
  const { toast, queue, setQueue } = useContext(ToastContext);
  // useCallback(() => {
  //   console.log('queue');
  //   if (queue.length > 0) {
  //     setQueue((queue: any[]) => {
  //       const autoClose = queue.map(q => {
  //         if (q.id !== queue[queue.length - 1].id || q.close !== true) {
  //           return {
  //             ...q,
  //             close: true,
  //           };
  //         }
  //         return {
  //           ...q,
  //         };
  //       });
  //       return [...autoClose];
  //     });
  //   }
  // }, [queue.length !== 0]);
  return (
    <Wrapper>
      {queue.map(props => {
        return (
          <Toast key={props.id} {...props}>
            {props.close === true ? 'true' : 'false'}
            {props.message}
          </Toast>
        );
      })}
    </Wrapper>
  );
};
export default ToastContainer;
