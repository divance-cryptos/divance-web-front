import React from "react";
import logo from "../assets/divancelogo.png";
import { Bar, NavItem, NavLogo } from "./style";

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
