import React from "react";
import s from "./Header.module.css";
import { Button } from '@mui/material';

export const Header = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
          <h1 className={s.text}>COUNTRY WALLET</h1>
          <p className={s.p}>
            DE AHORA EN ADELANTE, HACÉS
            <br /> MÁS CON TU DINERO!
          </p>
          <Button variant="contained">Contained</Button> 
      </header>
    </div>
  );
};
