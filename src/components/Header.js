import styled from '@emotion/styled'
import React from "react";
import logo from "../assets/divancelogo.png";

const Nav = styled.header`
  background-color: #FFFFFF;
  height: 60px;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavItem = styled.div`
  display: flex;
`

const NavLogo = styled.img`
  height: 40px;
`

const DiscordButton = styled.img`
  padding-left: 1px;
  height: 40px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
`

const TelegramButton = styled.img`
  padding-left: 1px;
  height: 40px;
`

const NavBrand = styled.h3`
`

const Header = () => {
  return (
    <Nav data-testid="header">
      <NavItem>
        <NavLogo src={logo}/>
      </NavItem>
      <NavItem>
        <NavBrand data-testid="header-title">Divance Crypto Dev Community</NavBrand>
      </NavItem>
      <NavItem>
        <a href="https://discord.gg/AwrM7xYkvF"><DiscordButton src={require('../assets/discord.png').default} /></a>
        {/* <a href="https://t.me/joinchat/21JvwZi7TA1hMDA8"><TelegramButton src={require('../assets/telegram.png').default} /></a> */}
      </NavItem>
    </Nav>
  )
};

export default Header;