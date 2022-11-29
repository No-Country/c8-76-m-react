import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { AppLanding } from "../AppLanding";
import Home from "../components/app/Home";
import MiPerfil from "../components/app/MiPerfil";
import NavPrincipal from "../components/app/NavPrincipal";
import WalletRouter from "./WalletRouter";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLanding />} />
          <Route path="/Home/*" element={<WalletRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
