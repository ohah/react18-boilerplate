/* eslint-disable react/jsx-no-useless-fragment */
import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background: #fff;
  min-width: 32rem;
  border-radius: 0.75rem;
  min-height: 16rem;
`;
interface ModalProps {
  isShow: boolean;
  close: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const onWrapper = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.currentTarget === wrapper.current) {
      props.close();
    }
  };
  const onBody = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    <>
      {props.isShow === true && (
        <ModalWrapper onClick={onWrapper} ref={wrapper}>
          <ModalBody onClick={onBody} ref={body}>
            {props.children}
          </ModalBody>
        </ModalWrapper>
      )}
    </>,
    document.getElementById('modal')!,
  );
};

export default Modal;
