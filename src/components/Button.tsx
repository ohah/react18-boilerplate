import { CSSProperties } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  variant: 'text' | 'contained' | 'outlined';
}
type ButtonProps = React.ComponentProps<typeof Wrapper> & WrapperProps;

const textStyle: CSSProperties = {
  color: '#1976d2',
};
const containedStyle: CSSProperties = {
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(25, 118, 210)',
};
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
  border-radius: 2px;
  align-items: center;
  ${({ variant }) => {
    switch (variant) {
      case 'text':
        return {
          color: '#1976d2',
        };
      case 'contained':
        return containedStyle;
      default:
        return outlinedStyle;
    }
  }}
`;
const Button = (props: ButtonProps) => {
  const { variant, ...rest } = props;
  return (
    <Wrapper variant={variant} {...rest}>
      d
    </Wrapper>
  );
};
export default Button;
