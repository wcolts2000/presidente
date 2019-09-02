import React, { Component } from "react";
import logo from "../../images/favicon.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: black;
  align-items: center;
  position: relative;

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

  .nav {
    @media (max-width: 750px) {
      flex-direction: column;
      background: black;
      position: absolute;
      top: 75px;
      left: 0;
      right: 0;
      height: auto;
      z-index: 10;
    }
  }

  p.hamburger {
    color: white;
    font-weight: bold;
    font-size: 3rem;
    cursor: pointer;
    display: none;

    @media (max-width: 750px) {
      display: initial;
    }
  }

  .logo {
    padding: 0;
    filter: invert(100%);
  }
`;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      navState: "none"
    };
  }

  toggleNav = () => {
    if (this.state.navState === "none") {
      this.setState({ navState: "flex" });
    } else {
      this.setState({ navState: "none" });
    }
  };

  render() {
    return (
      <Nav>
        <NavLink exact to="/" className="logo">
          <img src={logo} alt="presidente spiral" />
        </NavLink>
        <p className="hamburger" onClick={this.toggleNav}>
          &#9776;
        </p>
        <div
          className="nav"
          navState={this.state.navState}
          style={{ display: this.state.navState }}
        >
          <NavLink onClick={this.toggleNav} exact to="/">
            HOME
          </NavLink>
          <NavLink onClick={this.toggleNav} to="/zine">
            ZINE
          </NavLink>
          <NavLink onClick={this.toggleNav} to="/apparel">
            APPAREL
          </NavLink>
          <NavLink onClick={this.toggleNav} to="/paint">
            PAINT
          </NavLink>
          <NavLink onClick={this.toggleNav} to="/story">
            OUR STORY
          </NavLink>
        </div>
      </Nav>
    );
  }
}
