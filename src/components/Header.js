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

// const DiscordButton = styled.button`
//   background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   cursor: pointer;
// `

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
      {/* <DiscordButton href="https://t.me/joinchat/21JvwZi7TA1hMDA8">Discord</DiscordButton> */}
    </Nav>
  )
};

export default Header;