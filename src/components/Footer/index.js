import React from "react";
import { Bar, Image } from "./style";

const Footer = () => {
  return (
    <Bar data-testid="footer">
       <h1>Puedes contribuir si quieres ...</h1>
       <h3>👌 Uniendote a nuestro Discord</h3>
       <h3>👌 Contribuye en nuestos repositorios libres</h3>
       <h3>👌 Donación por ethereum, bsc, polygon WIP</h3>
       <Image src={require(`../../assets/ethereum.png`).default} alt="" width="260px" />
    </Bar>
  )
};

export default Footer;
