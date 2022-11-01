import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
  & a {
    list-style: none;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    height: 100%;
    position: relative;
    align-items: center;
    text-decoration: none;
  }
  & a::after {
    background: blue;
    display: block;
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 4px;
    transform: scaleY(0);
  }
  & a.active::after {
    width: 100%;
    height: 4px;
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  & a:visited {
    color: black;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <Link to="/">홈</Link>
      <NavLink to="/count">Count</NavLink>
      <NavLink to="/xhr">XHR</NavLink>
      <NavLink to="/fetch">FETCH</NavLink>
      <NavLink to="/axios">AXIOS</NavLink>
      <NavLink to="/react-query">React-Query</NavLink>
      <NavLink to="/useSWR">useSWR</NavLink>
      <NavLink to="/param">Param</NavLink>
    </Wrapper>
  );
};

export default Header;
