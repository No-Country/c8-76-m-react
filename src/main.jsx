import React from "react";
import ReactDOM from "react-dom/client";
import { AppLanding } from "./AppLanding";
import { AppRouter } from "./routes/AppRouter";
//import AppWallet  from "./AppWallet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
