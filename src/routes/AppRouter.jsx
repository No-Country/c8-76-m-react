import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { AppLanding } from "../AppLanding";
import  AppWallet  from "../AppWallet";
import Home from "../components/app/Home";
import MiPerfil from "../components/app/MiPerfil";



export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLanding/>} />
          <Route path="/Wallet" element={<AppWallet/>} />
          <Route path="login" element={<h1>Login</h1>} />
          <Route path="/auth/register" element={<h1>Register</h1>} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/MiPerfil" element={<MiPerfil/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
