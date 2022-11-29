import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { AppLanding } from "../AppLanding";
import Home from "../components/app/Home";
import MiPerfil from "../components/app/MiPerfil";
import NavPrincipal from "../components/app/NavPrincipal";


export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="login" element={<h1>Login</h1>} />
          <Route path="/auth/register" element={<h1>Register</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
