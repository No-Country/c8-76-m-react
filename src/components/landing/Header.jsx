import React from "react";
import s from "../../styles/Header.module.css";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.text}>COUNTRY WALLET</h1>
      <h2 className={s.text}>DE AHORA EN ADELANTE, HACÉS MÁS CON TU DINERO!</h2>
      <Button variant="contained">Mas información!</Button>
    </header>
  );
};
export default Header;
