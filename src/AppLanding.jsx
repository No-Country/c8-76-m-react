import React from "react";
import FooterLandingPage from "./components/landing/FooterLandingPage";
import Header from "./components/landing/Header";
import NavHeader from "./components/landing/NavHeader";
import SectionPrincipal from "./components/landing/SectionPrincipal";
import { AppRouter } from "./routes/AppRouter";

export const AppLanding = () => {
  return (
    <div>
      <NavHeader />
      <Header />
      <SectionPrincipal />
      <FooterLandingPage />
    </div>
  );
};
