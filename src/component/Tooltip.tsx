/* eslint-disable react/jsx-props-no-spreading */
import {ReactNode} from 'react';
import styled, {css} from 'styled-components';
type Placement = 'bottom' | 'left' | 'right' | 'top';
interface TooltipProps {
  title: string;
  arrow?: boolean;
  children: ReactNode;
  placement?: Placement;
}
const Message = styled.div<TooltipProps>`
  display: none;
  background-color: #eef3fd;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 9px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  padding: 0.4rem 0.75rem;
  position: relative;
  width: fit-content;
  position: absolute;
  white-space: nowrap;
  ${props => {
    switch (props.placement) {
      case 'bottom':
        return 'top:calc(100% + 10px);left:50%';
      case 'left':
        return 'top:50%;right:calc(100% + 10px)';
      case 'right':
        return 'top:50%;left:calc(100% + 10px)';
      case 'top':
        return 'bottom:calc(100% + 10px);left:50%';
      default:
        return '100%';
    }
  }};
  transform: ${props => {
    switch (props.placement) {
      case 'bottom':
      case 'top':
        return 'translateX(-50%)';
      case 'right':
      case 'left':
        return 'translateY(-50%)';
      default:
        return '';
    }
  }};
  z-index: 100;

  ${props =>
    props.arrow &&
    css`
      &:after {
        border-color: #eef3fd transparent;
        border-width: 0 6px 8px 6.5px;
        ${afterStyle(props.placement as never)}
        border-style: solid;
        content: '';
        display: block;
        position: absolute;
        width: 0;
        z-index: 1;
      }
      &:before {
        border-color: #7689fd transparent;
        border-width: 0 6px 8px 6.5px;
        ${beforeStyle(props.placement as never)}
        border-style: solid;
        content: '';
        display: block;
        position: absolute;
        width: 0;
        z-index: 0;
      }
    `}
`;
const beforeStyle = (placement: Placement) => {
  switch (placement) {
    case 'bottom':
      return 'left:50%;transform:translateX(-50%);bottom: calc(100%);';
    case 'top':
      return 'left:50%;transform:translateX(-50%) rotate(180deg);top: calc(100%);';
    case 'left':
      return 'left:100%;transform:translateY(-50%) rotate(90deg);top: calc(50%);margin-left:-2px;';
    case 'right':
      return 'right:100%;transform:translateY(-50%) rotate(270deg);top: calc(50%);margin-right:-2px;';
    default:
      return '';
  }
};
const afterStyle = (placement: Placement) => {
  switch (placement) {
    case 'bottom':
      return 'left:50%;transform:translateX(-50%);bottom: calc(100% - 1px);';
    case 'top':
      return 'left:50%;transform:translateX(-50%) rotate(180deg);top: calc(100% - 1px);';
    case 'left':
      return 'left:calc(100% - 1px);transform:translateY(-50%) rotate(90deg);top: calc(50%);margin-left:-2px;';
    case 'right':
      return 'right:calc(100% - 1px);transform:translateY(-50%) rotate(270deg);top: calc(50%);margin-right:-2px;';
    default:
      return '';
  }
};
const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  &:hover ${Message} {
    display: block;
  }
`;
const Tooltip = (props: TooltipProps) => {
  return (
    <Wrapper>
      {props.children}
      <Message {...props}>{props.title}</Message>
    </Wrapper>
  );
};

export default Tooltip;
