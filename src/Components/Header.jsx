import React from "react";
import { useState } from "react";
export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const menuBtn = () => {
    setIsActive(!isActive);
  };
  const [isVisibility, setIsVisibility] = useState(false);
  const menuVisibility = () => {
    setIsVisibility(!isVisibility);
  };
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <header className="header">
      <div className="container">
        <h2>
          Nuestro <span>Concesionario</span>
        </h2>
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
        <nav
          className={`menu ${isVisibility ? "isVisibility" : ""}`}
          onClick={(e) => {
            menuBtn();
            menuVisibility();
          }}
        >
          <a href="#INICIO">INICIO</a>
          <a href="#MODELOS">MODELOS</a>
          <a href="#NOTICIAS">NOTICIAS</a>
          <a href="#CONTACTO">CONTACTO</a>
        </nav>
        <div class="search-container">
          <input
            type="text"
            value={inputValue}
            placeholder="Buscar"
            onChange={handleChange}
          />
          <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// hey

