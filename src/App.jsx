import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StyleProvider } from "@ant-design/cssinjs";
import Login from "./components/Login/Login";
import Proyecto from "./components/CrearCaso/CrearCaso";
import Buscar from "./components/BuscarCaso/BuscarCaso";
import EditarCaso from "./components/EditarCaso/EditarCaso";

const App = () => {
  return (
    <StyleProvider layer>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />{" "}
          {/* Mostrar Login al abrir la aplicación */}
          <Route path="/login" element={<Login />} />
          <Route path="/CrearCaso/" element={<Proyecto />} />
          <Route path="/BuscarCaso/" element={<Buscar />} />
          <Route path="/EditarCaso/:id" element={<EditarCaso />} />
        </Routes>
      </Router>
    </StyleProvider>
  );
};

export default App;
