
import React from 'react'
import Home from './components/Home'
import NavHeader from './components/landing/NavHeader'
import { AppRouter } from "./routes/AppRouter";


export const AppWallet = () => {

  return (

    <>
      <NavHeader />
      <div>
        <p>AppWallet Principal</p>
      </div>
      <Home />
    </>
  );
};


