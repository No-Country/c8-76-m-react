import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./context/DataContext";
import { AppRouter } from "./routes/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <AppRouter />
    </DataProvider>
  </React.StrictMode>
);
