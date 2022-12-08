import React from "react";
import s from "../../styles/Header.module.css";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.text} data-aos="fade-up" data-aos-delay="400">COUNTRY WALLET</h1>
      <h2 className={s.text} data-aos="fade-up" data-aos-delay="400">DE AHORA EN ADELANTE, HACÉS MÁS CON TU DINERO!</h2>
      <Button variant="contained" data-aos="fade-up" data-aos-delay="800">Mas información!</Button>
    </header>
  );
};
export default Header;
