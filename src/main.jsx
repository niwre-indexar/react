import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot desde react-dom/client en lugar de react-dom
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
