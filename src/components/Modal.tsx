/* eslint-disable react/jsx-no-useless-fragment */
import { Fragment } from 'react';
import styled, { StyledComponent } from 'styled-components';

interface DefaultProps<T> extends React.DetailedHTMLProps<React.HTMLAttributes<T>, T> {
  children: React.ReactNode;
}

interface ModalProps extends DefaultProps<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}

interface ComponentModal {
  display: string;
  (props: ModalProps): JSX.Element;
  Header: (props: DefaultProps<HTMLElement>) => JSX.Element;
  Body: (props: DefaultProps<HTMLDivElement>) => JSX.Element;
  Footer: (props: DefaultProps<HTMLElement>) => JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;
const Content = styled.div`
  inset: 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-width: 24rem;
  background-color: rgba(255, 255, 255, 1);

  & .header,
  & .body,
  & .footer {
    min-height: 2rem;
    padding: 3px 8px;
    width: 100%;
  }
`;

const Modal = ({ children, open, onClose, ...props }: ModalProps) => {
  return (
    <>
      {open && (
        <Wrapper {...(props as object)} onClick={onClose}>
          <Content onClick={e => e.stopPropagation()}>{children}</Content>
        </Wrapper>
      )}
    </>
  );
};

const Header = ({ children, ...props }: DefaultProps<HTMLHeadingElement>) => {
  return (
    <header {...props} className={props.className ? props.className + 'header' : 'header'}>
      {children}
    </header>
  );
};
const Body = ({ children, ...props }: DefaultProps<HTMLDivElement>) => {
  return (
    <div {...props} className={props.className ? props.className + 'body' : 'body'}>
      {children}
    </div>
  );
};
const Footer = ({ children, ...props }: DefaultProps<HTMLElement>) => {
  return (
    <footer {...props} className={props.className ? props.className + 'footer' : 'footer'}>
      {children}
    </footer>
  );
};

export default Object.assign(Modal, { Header, Body, Footer }) as unknown as ComponentModal;
