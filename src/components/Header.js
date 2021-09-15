import styled from '@emotion/styled'
import React from "react";
import logo from "../assets/divancelogo.png";
import { FaDiscord, FaTelegram } from 'react-icons/fa';

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
const ChatIcons = styled.span`
  display: flex;
  margin-right: 30px;
  font-size: 20px;
  color: #503484;
`

const DiscordButton = styled.img`
  padding-right: 4px;
  height: 40px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(0.8);
  }
`

const NavBrand = styled.h3`
  margin-right: 30px;
`

const Icons = styled.h3`
  margin-right: 15px;

  &:hover {
    transform: scale(1.2);
  }
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
        <ChatIcons>
          <Icons> <a href="https://discord.gg/AwrM7xYkvF"><FaDiscord /></a> </Icons> 
          <Icons> <a href="https://t.me/joinchat/21JvwZi7TA1hMDA8"><FaTelegram /></a> </Icons> 
        </ChatIcons>
        {/* <a href="https://t.me/joinchat/21JvwZi7TA1hMDA8"><TelegramButton src={require('../assets/telegram.png').default} /></a> */}
      </NavItem>
    </Nav>
  )
};

export default Header;