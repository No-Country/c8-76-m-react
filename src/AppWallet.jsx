
import React from 'react'

import { FooterLandingPage } from './FooterLandingPage'


import Home from './components/Home'
import NavHeader from './components/landing/NavHeader'
import { AppRouter } from "./routes/AppRouter";



export const AppWallet = () => {

  return (

    <div>
        <h1>AppWallet Principala</h1>    
        <FooterLandingPage/>
        
    </div>
  )
}


    <>
      <NavHeader />
      <div>
        <p>AppWallet Principal</p>
      </div>
      <Home />
    </>
  );
};



