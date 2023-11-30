import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "./cooper.scss";
import "./inter.scss";
import GridOverlay from "./layout/grid-overlay/GridOverlay.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {import.meta.env && <GridOverlay />}
  </React.StrictMode>,
);