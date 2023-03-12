import styled from 'styled-components';

type Position = 'bottom' | 'left' | 'right' | 'top';
interface TooltipProps {
  title: string;
  children: React.ReactNode;
  position?: Position;
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
  top: calc(100% + 10px);
  left: 50%;
  ${props => {
    switch (props.position) {
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
    switch (props.position) {
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
`;

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
      <Message {...props}> {props.title} </Message>
    </Wrapper>
  );
};

export default Tooltip;
