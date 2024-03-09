import React from "react";
import { useState } from "react";
export const Header = () => {
  // constante Que Guarda el documento
  const d = document;
  //  Estado que maneja la activacion de una clase en css
  const [isActive, setIsActive] = useState(false);
  const menuBtn = () => {
    setIsActive(!isActive);
  };

  // Estado que maneja la Visibilidad de una clase
  const [isVisibility, setIsVisibility] = useState(false);
  const menuVisibility = () => {
    setIsVisibility(!isVisibility);
  };
  // Funcion que ayuda agragar el modo oscuro

  const ModeDark = (event) => {
    const ls = localStorage;
    const $darkBtn = event.target;
    const $selectors = d.querySelectorAll("[data-dark]");
    let moon = "🌑",
      sun = "☀️";
    const lightMode = () => {
      $selectors.forEach((el) => {
        el.classList.remove("classDark");
      });
      $darkBtn.textContent = moon;
      ls.setItem("theme", "light");
    };
    const darkMode = () => {
      $selectors.forEach((el) => {
        el.classList.add("classDark");
      });
      $darkBtn.textContent = sun;
      ls.setItem("theme", "dark");
    };
    if ($darkBtn.textContent === moon) {
      darkMode();
    } else {
      lightMode();
    }
    console.log(event.target);
  };
  return (
    <div>
      {/* Cabecera  del  la pagina */}
      <header className="header">
        <div className="container">
          <h2>
            CAR <span>HUB</span>
          </h2>
          {/* Manejo del menu en moviles */}
          <button
            className={`hamburger hamburger--vortex menu-btn  ${
              isActive ? "is-active" : ""
            }`}
            type="button"
            onClick={() => {
              menuBtn();
              menuVisibility();
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          {/* Menu desplegable  */}
          <nav
            className={`menu ${isVisibility ? "isVisibility" : ""}`}
            onClick={() => {
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
          {/* Boton del modo oscuro */}
          <button className="dark-theme-btn" onClick={ModeDark}>
            🌑
          </button>
        </div>
      </header>
    </div>
  );
};

// Siuuu
