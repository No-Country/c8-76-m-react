import React from "react";
import FooterLandingPage from "./components/landing/FooterLandingPage";
import Header from "./components/landing/Header";
import NavHeader from "./components/landing/NavHeader";


export const AppLanding = () => {
  return (
    <div>
      <NavHeader />
      <Header />
      <FooterLandingPage />
    </div>
  );
};
