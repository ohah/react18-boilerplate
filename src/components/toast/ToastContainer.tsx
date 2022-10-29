import { useContext } from 'react';
import styled from 'styled-components';
import { ToastContext } from './ToastContext';

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const ToastContainer = () => {
  const { toast, queue } = useContext(ToastContext);
  return (
    <Wrapper>
      {queue.map((data) => {
        return <div>{data.uid}</div>;
      })}
    </Wrapper>
  );
};

export default ToastContainer;
