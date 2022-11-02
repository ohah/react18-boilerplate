import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Message = styled.div`
  position: absolute;
  top: 33px;
  left: 25px;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  border-radius: 4px;
  cursor: default;
  background-color: black;
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

  &:hover + ${Message} {
    display: block;
  }
`;
