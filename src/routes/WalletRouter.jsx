import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/app/Home";
import MiPerfil from "../components/app/MiPerfil";
import NavPrincipal from "../components/app/NavPrincipal";
import Servicios from "../components/app/Servicios";
import Transferencias from "../components/app/Transferencias";

const WalletRouter = () => {
  return (
    <>
      <NavPrincipal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/Transferencias" element={<Transferencias />} />
        <Route path="/Servicios" element={<Servicios />} />
      </Routes>
    </>
  );
};

export default WalletRouter;
