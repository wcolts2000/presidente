import React from "react";
import logo from "../../images/favicon.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: black;
  align-items: center;

  a {
    font-size: 1.8rem;
    padding: 1.6rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  .active {
    color: aqua;
  }

  .logo {
    padding: 0;
    filter: invert(100%);
  }
`;

export default function Header() {
  return (
    <Nav>
      <NavLink exact to="/" className="logo">
        <img src={logo} alt="presidente spiral" />
      </NavLink>
      <div>
        <NavLink exact to="/">
          HOME
        </NavLink>
        <NavLink to="/zine">ZINE</NavLink>
        <NavLink to="/apparel">APPAREL</NavLink>
        <NavLink to="/paint">PAINT</NavLink>
        <NavLink to="/story">OUR STORY</NavLink>
      </div>
    </Nav>
  );
}
