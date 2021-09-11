import styled from '@emotion/styled'
import React from "react";
import logo from "../assets/divancelogo.png";

const Nav = styled.header`
  background-color: #FFFFFF;
  height: 60px;
  color: #000000;
  display: flex;
  flex-direction: row;
`

const NavLogo = styled.img`

`

const NavBrand = styled.h3`
  padding-top: 17px;
  padding-left: 5px;
`

const Header = () => {
  return (
    <Nav data-testid="header">
      <NavLogo src={logo}/>
      <NavBrand data-testid="header-title">Divance Crypto Dev Community</NavBrand>
    </Nav>
  )
};

export default Header;