import styled from 'styled-components';

export const Container = styled.div``;

export const Message = styled.div`
  display: none;
`;

export const Content = styled.div`
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  background-color: royalblue;

  &:hover ${Message} {
    display: block;
  }
`;
