import styled from '@emotion/styled'
import React from "react";
import logo from "../assets/divancelogo.png";
import { FaDiscord, FaTelegram } from 'react-icons/fa';

const Bar = styled.footer`
  background-color: #FFFFFF;
  height: 60px;
  color: #000000;
  grid-area: footer;
  flex-shrink: 0;
`

const NavItem = styled.div`
  display: flex;
`
const NavLogo = styled.img`
  height: 40px;
`

const Footer = () => {
  return (
    <Bar data-testid="footer">
      <NavItem>
        <NavLogo src={logo}/>
      </NavItem>
    </Bar>
  )
};

export default Footer;
