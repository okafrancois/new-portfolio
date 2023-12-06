import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "./assets/fonts/cooper/cooper.scss";
import "./assets/fonts/inter/inter.scss";
import GridOverlay from "./layout/GridOverlay.tsx";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {import.meta.env && <GridOverlay />}
  </React.StrictMode>,
);