import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="Header">
      <p>Componente: Header</p>
      <img src={props.src} width={props.width} className="logo" alt="logo" />
      <h1>TIGRE y LIVERPOOL, las maravillas del mundo moderno.</h1>
      <div className="links">
        <a
          className="Header__link"
          href="https://catigre.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Página oficial de Tigre
        </a>
        <a
          className="Header__link"
          href="https://liverpoolfc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Liverpool official site
        </a>
      </div>
    </header>
  );
}

Header.defaultProps = {
  size: 600,
}