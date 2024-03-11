// Importar las librerias que necesitan
import React, { useEffect } from "react";
import { useState } from "react";
import ModeDark from "./ModeDark";
// Componente que se exporta por defecto
export const Header = () => {
  // Constante para guardar el document
  const d = document;
  // Estado que valide true o false para una clase activa
  const [isActive, setIsActive] = useState(false);
  const menuBtn = () => {
    setIsActive(!isActive);
  };
  // Estado que valide true o false para la  visibilidad de una clase
  const [isVisibility, setIsVisibility] = useState(false);
  const menuVisibility = () => {
    setIsVisibility(!isVisibility);
  };
  // Retorna el html
  return (
    <div>
      {/* Header de  la pagina */}
      <header className="header">
        <div className="container">
          <h2>
            CAR <span>HUB</span>
          </h2>
          {/* Boton para el menu  */}
          <button
            className={`hamburger hamburger--vortex menu-btn  ${
              isActive ? "is-active" : ""
            }`}
            type="button"
            onClick={(e) => {
              menuBtn();
              menuVisibility();
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          {/* Menu */}
          <nav
            className={`menu ${isVisibility ? "isVisibility" : ""}`}
            onClick={(e) => {
              menuBtn();
              menuVisibility();
            }}
            data-dark
          >
            <a href="#INICIO">INICIO</a>
            <a href="#MODELOS">MODELOS</a>
            <a href="#NOTICIAS">NOTICIAS</a>
            <a href="#CONTACTO">CONTACTO</a>
          </nav>
          {/* Componente para el modo oscuro */}
          <ModeDark />
        </div>
      </header>
    </div>
  );
};

// Siuuu
