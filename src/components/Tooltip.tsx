import styled from 'styled-components';

interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

const Message = styled.span`
  display: none;
  background: #505050;
  color: white;
  border-radius: 5px;
  padding: 0.25px 0.75px;
  position: absolute;
  top: 100%;
  left: 0;
`;
const Wrapper = styled.div`
  display: block;
  position: relative;
  &:hover ${Message} {
    display: block;
  }
`;
const Tooltip = (props: TooltipProps) => {
  // const [isHover, setHover] = useState<boolean>(false);
  return (
    <Wrapper>
      <div>{props.children}</div>
      <Message>{props.title}</Message>
    </Wrapper>
  );
};

export default Tooltip;
