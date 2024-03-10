import React from "react";
import { useState } from "react";
export const Header = () => {
  const d = document;
  const [isActive, setIsActive] = useState(false);
  const menuBtn = () => {
    setIsActive(!isActive);
  };
  const [isVisibility, setIsVisibility] = useState(false);
  const menuVisibility = () => {
    setIsVisibility(!isVisibility);
  };

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
      <header className="header">
        <div className="container">
          <h2>
            CAR <span>HUB</span>
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
            data-dark
          >
            <a href="#INICIO">INICIO</a>
            <a href="#MODELOS">MODELOS</a>
            <a href="#NOTICIAS">NOTICIAS</a>
            <a href="#CONTACTO">CONTACTO</a>
          </nav>
          <button class="dark-theme-btn" onClick={ModeDark}>
            🌑
          </button>
        </div>
      </header>
    </div>
  );
};

// Siuuu
