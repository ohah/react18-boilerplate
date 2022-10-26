/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

interface WrapperProps {
  variant?: 'text' | 'contained' | 'outlined';
  children: React.ReactNode;
}
type ButtonProps = WrapperProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const textStyle = css`
  color: #1976d2;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const containedStyle = css`
  color: rgb(255, 255, 255);
  background-color: rgb(25, 118, 210);
  &:hover {
    background-color: rgb(25, 118, 210, 0.8);
  }
`;
const outlinedStyle: CSSProperties = {
  border: '1px solid rgba(25, 118, 210, 0.5)',
  color: '#1976d2',
};

const Wrapper = styled.button<WrapperProps>`
  min-width: 64px;
  padding: 6px 16px;
  display: inline-flex;
  justify-content: center;
  background-color: #fff;
  border: 1px solid;
  cursor: pointer;
  border-radius: 2px;
  align-items: center;
  ${props => {
    switch (props.variant) {
      case 'text':
        return textStyle;
      case 'contained':
        return containedStyle;
      default:
        return outlinedStyle;
    }
  }}
`;
const Button = (props: ButtonProps) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};
export default Button;
