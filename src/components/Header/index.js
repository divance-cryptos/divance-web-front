import React from "react";
import logo from "../../assets/divancelogo.png";
import { FaDiscord, FaTelegram, FaGithub, FaYoutube, FaTwitch } from 'react-icons/fa';
import { Nav, NavItem, NavLogo, Icons, ChatIcons, NavBrand } from "./style";

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
          <Icons> <a href="https://www.youtube.com/channel/UCwDKDJvdjZvdOVwG2vWi6Rg"><FaYoutube/></a> </Icons>
          <Icons> <a href="https://twitch.tv/divance_twitch"><FaTwitch /></a> </Icons>
          <Icons> <a href="https://discord.gg/fXP5juJqQa"><FaDiscord /></a> </Icons>
          <Icons> <a href="https://t.me/joinchat/21JvwZi7TA1hMDA8"><FaTelegram /></a> </Icons>
          <Icons> <a href="https://github.com/divance-cryptos"><FaGithub /></a> </Icons>
        </ChatIcons>
        {/* <a href="https://t.me/joinchat/21JvwZi7TA1hMDA8"><TelegramButton src={require('../assets/telegram.png').default} /></a> */}
      </NavItem>
    </Nav>
  )
};

export default Header;
