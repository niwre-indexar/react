// Footer.jsx

import React from "react";
import "./Footer.css"; // Archivo CSS para estilos
import "../../App.css";
import twitterImage from "../Images/Twitter.png";
import instagramImage from "../Images/Instagram.png";
import facebookImage from "../Images/Facebook.png";
import youtubeImage from "../Images/Youtube.png";

const Footer = ({ isFixed }) => {
  // Aplica la clase "fixed-footer" si isFixed es verdadero
  const footerClass = isFixed ? "footer fixed-footer" : "footer";

  return (
    <footer className={footerClass}>
      <div className="footer-section">
        <span>Dirección nacional de Aduanas</span>
        <span>Plaza Sotomayor 60, Valparaíso, Chile.</span>
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <div className="label">
          <span>aduana.cl</span>
        </div>
        <div className="content-rss">
          <a href="https://twitter.com/AduanaCl/">
            <img src={twitterImage} alt="LogoTwitter" className="image-rss" />
          </a>
          <a href="https://instagram.com/aduanasdechile/">
            <img
              src={instagramImage}
              alt="LogoInstagram"
              className="image-rss"
            />
          </a>
          <a href="https://www.facebook.com/AduanasdeChile/">
            <img src={facebookImage} alt="LogoFacebook" className="image-rss" />
          </a>
          <a href="https://www.youtube.com/user/AduanasdeChile">
            <img src={youtubeImage} alt="LogoYoutube" className="image-rss" />
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <span>Teléfono Contact Center</span>
        <span>600 570 7040</span>
      </div>
    </footer>
  );
};

export default Footer;
