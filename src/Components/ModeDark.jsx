// Importar Librerias
import React, { useEffect } from "react";

// Funcion del Modo Oscuro
const ModeDark = () => {
  useEffect(() => {
    const ls = window.localStorage;
    const currentTheme = ls.getItem("theme");
    const $selectors = document.querySelectorAll("[data-dark]");
    const $darkBtn = document.getElementById("modeDark");

    const lightMode = () => {
      $selectors.forEach((el) => {
        el.classList.remove("classDark");
      });
      $darkBtn.textContent = "🌑";
      ls.setItem("theme", "light");
    };

    const darkMode = () => {
      $selectors.forEach((el) => {
        el.classList.add("classDark");
      });
      $darkBtn.textContent = "☀️";
      ls.setItem("theme", "dark");
    };

    // Verificar y establecer el tema predeterminado si no está definido
    if (currentTheme === null) {
      ls.setItem("theme", "light");
    }

    // Aplicar el modo correspondiente según el tema actual
    if (currentTheme === "light") {
      lightMode();
    } else if (currentTheme === "dark") {
      darkMode();
    }
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente
  // Modo Oscuro
  const ModeDark = (event) => {
    const ls = window.localStorage;
    const $darkBtn = event.target;
    const $selectors = document.querySelectorAll("[data-dark]");

    const lightMode = () => {
      $selectors.forEach((el) => {
        el.classList.remove("classDark");
      });
      $darkBtn.textContent = "🌑";
      ls.setItem("theme", "light");
    };

    const darkMode = () => {
      $selectors.forEach((el) => {
        el.classList.add("classDark");
      });
      $darkBtn.textContent = "☀️";
      ls.setItem("theme", "dark");
    };

    if ($darkBtn.textContent === "🌑") {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <div>
      {/* Boton para el Modo oscuro */}
      <button id="modeDark" class="dark-theme-btn" onClick={ModeDark}>
        🌑
      </button>
    </div>
  );
};

export default ModeDark;
