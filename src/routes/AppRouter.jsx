import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/landing/Home";
import NavHeader from "../components/landing/NavHeader";
import { HomeWallet } from "../components/wallet/HomeWallet";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<h1>Login</h1>} />
          <Route path="user" element={<HomeWallet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
