import React, { useEffect, useState } from "react";
import "./Header.css"; // Archivo de estilos CSS
import iconProfile from "../Images/profile-icon.png";
import logoAduana from "../Images/logo-aduana.png";
import escudoAduana from "../Images/aduana-escudo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ menuOpen, toggleMenu }) => {
  const headerClassName = menuOpen ? "header open" : "header";
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    //Limpiar el detector de eventos al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={headerClassName}>
      <div>
        <div className={`content-logo ${!menuOpen ? "" : "closed"}`}>
          {isSmallScreen ? (
            !menuOpen ? (
              <LogoAduana />
            ) : (
              <LogoAduana />
            )
          ) : !menuOpen ? (
            <LogoAduana />
          ) : (
            <EscudoAduana />
          )}
        </div>
      </div>

      {isLoggedIn && ( // Si el usuario está logueado, se muestra la información del usuario
        <div className="content-info-header">
          <div className="content-app-name"></div>
          <div className="user-info">
            <div className="user-icon">
              {/* Aquí iría el icono de perfil de usuario */}
              <img src={iconProfile} alt="User Icon" />
            </div>
            <p style={{ marginRight: "5px" }}>Bienvenido</p>
            <p className="user-label">------ ------</p>
          </div>
        </div>
      )}
    </header>
  );
};

const LogoAduana = (menuOpen) => {
  return (
    <img
      src={logoAduana}
      alt="Logo"
      className={`menu__logo ${!menuOpen ? "" : "closed"}`}
    />
  );
};

const EscudoAduana = (menuOpen) => {
  return (
    <img
      src={escudoAduana}
      alt="Logo"
      className={`menu__logo ${!menuOpen ? "" : "closed"}`}
      style={{ width: "60px", height: "90px" }}
    />
  );
};

export default Header;
