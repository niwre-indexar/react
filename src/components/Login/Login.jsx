import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Login.css"; // Importa el archivo CSS para estilizar el login

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/BuscarCaso/"); // Redirige al componente BuscarCaso
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
  };

  //Dejar un usuario para probar el isLoggedIn
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Header />
      <br></br>
      <div className="login-content" style={{ textAlign: "center" }}>
        <h2>Iniciar sesión</h2>
        <p>
          Para comenzar su sesión se deben ingresar las credenciales
          institucionales.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "inline-block", textAlign: "left" }}
        >
          <div className="mb-3">
            <input
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="btn-login">
            <button type="submit" className="btnLogin">
              Entrar
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-block"
              onClick={handleClear}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Login;
