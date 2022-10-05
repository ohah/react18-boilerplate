import {ToastContext, ToastProps} from 'context/ToastContext';
import {useContext, useEffect} from 'react';
import styled from 'styled-components';

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
  padding: 0.25rem 0.75rem;
  border-radius: 10px;
`;
export const ToastContainer = () => {
  const {toast, queue} = useContext(ToastContext);
  return (
    <Wrapper>
      {queue.map(props => {
        return (
          <Toast key={props.id} {...props}>
            {props.id}
          </Toast>
        );
      })}
    </Wrapper>
  );
};
export default ToastContainer;
