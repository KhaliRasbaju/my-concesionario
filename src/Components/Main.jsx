//Importa Los archivos, librerias y  componentes requeridos
import React, { useState } from "react";
import Card from "./Cards";
import Footer from "./Footer";
import video from "../assets/imagenes/Video.mp4";
import imgchevrolet from "../assets/imagenes/chevrolet.png";
import imgferrari from "../assets/imagenes/ferrari.png";
import pngtesla from "../assets/imagenes/tesla.png";
import pngporshe from "../assets/imagenes/porsche.png";
import pnglamborghini from "../assets/imagenes/lamborghini.png";
import img1 from "../assets/imagenes/image1.webp";
import img2 from "../assets/imagenes/image2.jpg";
import img4 from "../assets/imagenes/image4.jpg";
import img5 from "../assets/imagenes/image5.webp";
import img6 from "../assets/imagenes/image6.jpg";
import imgbmwM5 from "../assets/CardsImagenes/bmw m5.jpg";
import imgFordGT from "../assets/CardsImagenes/Ford-GT.jpg";
import imgMercedez from "../assets/CardsImagenes/mercedes-benz-clase-e-2024.jpg";
import imgNissan from "../assets/CardsImagenes/nissan-z-nismo.jpg";
import imgAudi from "../assets/CardsImagenes/audi A6 e-tron.jpg";
import imgCadillac from "../assets/CardsImagenes/Cadillac.jpg";
import imgFondo from "../assets/imagenes/cocesionario.jpg";

export function Main() {
  // constante del documento
  const d = document;
  //Define Los estilos para el carrusel
  const myStyle1 = {
    "--optionBackground": `url(${img5})`,
  };
  const myStyle2 = {
    "--optionBackground": `url(${img4})`,
  };
  const myStyle3 = {
    "--optionBackground": `url(${img1})`,
  };
  const myStyle4 = {
    "--optionBackground": `url(${img2})`,
  };
  const myStyle6 = {
    "--optionBackground": `url(${img6})`,
  };
  const myStyle7 = {
    "--optionBackground": `url(${imgFondo})`,
  };
  //funcion la cual cambia el carrusel
  const handleClickCarOption = (event) => {
    // Elimina la clase activa de todos los elementos
    d.querySelectorAll(".option").forEach((elemento) => {
      elemento.classList.remove("active");
    });
    // Agrega la clase activa solo al elemento que se hizo clic
    event.target.classList.add("active");
  };
  //Estado para manejar la informacion del Carrusel
  const [activeOption, setActiveOption] = useState(0);
  const handleClickOption = (index) => {
    setActiveOption(index);
  };
  //Funcion Carrusel la cual nos ayuda en un movil o tablet
  const Carrousel = (event) => {
    const $nextBtn = d.querySelector(".slider-btn .next"),
      $prevBtn = d.querySelector(".slider-btn .prev"),
      $slides = d.querySelectorAll(".option");
    let i = activeOption;
    if (event.target === $prevBtn) {
      event.preventDefault();
      $slides[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }

    if (event.target === $nextBtn) {
      event.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }
    setActiveOption(i);
  };

  //estructura del inicio
  return (
    <div>
      <section id="INICIO">
        <article className="container-inicio">
          <div className="contenido">
            <h1>UNA MARAVILLA DE LA INGENIERÍA</h1>
            <h2>ÚNETE AHORA !</h2>
          </div>
          <video className="video" autoPlay loop>
            <source src={video} />
          </video>
        </article>
      </section>
      <section id="MODELOS" className="section" style={myStyle7}>
        <h2>Modelos</h2>
        <div className="container-modelos container-flex">
          <div className="options flex-item">
            <div
              className={`option active`}
              style={myStyle1}
              onClick={(event) => {
                handleClickCarOption(event);
                handleClickOption(0);
              }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">🖤</div>
                <div className="info">
                  <div className="main">Porshe</div>
                  <div className="sub">GT3 R5</div>
                </div>
              </div>
            </div>
            <div
              className={`option`}
              style={myStyle2}
              onClick={(event) => {
                handleClickCarOption(event);
                handleClickOption(1);
              }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">❤️</div>
                <div className="info">
                  <div className="main">Tesla</div>
                  <div className="sub">Roadster 2020</div>
                </div>
              </div>
            </div>
            <div
              className={`option`}
              style={myStyle3}
              onClick={(event) => {
                handleClickCarOption(event);
                handleClickOption(2);
              }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">💛</div>
                <div className="info">
                  <div className="main">Ferrari</div>
                  <div className="sub">LaFerrari</div>
                </div>
              </div>
            </div>
            <div
              className={`option`}
              style={myStyle4}
              onClick={(event) => {
                handleClickCarOption(event);
                handleClickOption(3);
              }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">🧡</div>
                <div className="info">
                  <div className="main">Lamborghini</div>
                  <div className="sub">Huracan</div>
                </div>
              </div>
            </div>
            <div
              className={`option`}
              style={myStyle6}
              onClick={(event) => {
                handleClickCarOption(event);
                handleClickOption(4);
              }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">❤️</div>
                <div className="info">
                  <div className="main">Chevrolete</div>
                  <div className="sub">Camaro ZL1</div>
                </div>
              </div>
            </div>
            <div
              class="slider-btn"
              onClick={(event) => {
                Carrousel(event);
              }}
            >
              <a class="prev" href="#">
                &laquo;
              </a>
              <a class="next" href="#">
                &raquo;
              </a>
            </div>
          </div>
          <div className="container-car flex-item flex-grow">
            <div className="car-info">
              <div
                className={`car-description ${
                  activeOption === 0 ? "" : "none"
                }`}
              >
                <h2>Porsche</h2>
                <img src={pngporshe} alt="Porshe Logo" />
                <p>
                  Los atletas lo saben: el máximo rendimiento requiere algo más
                  que condiciones perfectas y suerte. El factor decisivo es la
                  voluntad incondicional de volverse más rápido y más fuerte con
                  cada sesión de entrenamiento. Cuestionarse todo, especialmente
                  a sí mismo. Y aprender el máximo de cada error. Porque el
                  mayor desafío es permanecer imbatible. Solo con este enfoque,
                  Porsche es capaz de seguir ampliando los límites de lo
                  factible.
                </p>
              </div>
              <div
                className={`car-description ${
                  activeOption === 1 ? "" : "none"
                }`}
              >
                <h2>Tesla</h2>
                <img src={pngtesla} alt="Tesla Logo" />
                <p>
                  Experimenta la vanguardia de la ingeniería eléctrica con el
                  Tesla Roadster 2020. Este automóvil redefine la velocidad y la
                  sostenibilidad con su diseño aerodinámico y su potencia
                  impresionante. Equipado con tecnología de punta, el Roadster
                  ofrece un rendimiento excepcional sin comprometer el medio
                  ambiente. Cada curva, cada aceleración, te llevará a un nuevo
                  nivel de emoción y eficiencia.
                </p>
              </div>
              <div
                className={`car-description ${
                  activeOption === 2 ? "" : "none"
                }`}
              >
                <h2>Ferrari</h2>
                <img src={imgferrari} alt="Ferrari Logo" />
                <p>
                  La excelencia italiana cobra vida en el Ferrari LaFerrari. Con
                  un motor V12 y un sistema híbrido, este superdeportivo encarna
                  la perfección en ingeniería y diseño. Cada detalle, desde su
                  distintiva carrocería hasta su cabina de lujo, refleja el
                  legado de la marca. Con una potencia impresionante y una
                  aerodinámica incomparable, el LaFerrari ofrece una experiencia
                  de conducción única que combina rendimiento y elegancia en su
                  máxima expresión.
                </p>
              </div>
              <div
                className={`car-description ${
                  activeOption === 3 ? "" : "none"
                }`}
              >
                <h2>Lamborghini</h2>
                <img src={pnglamborghini} alt="Logo Porshe" />
                <p>
                  Domina la carretera con el Lamborghini Huracan Tecnica. Este
                  superdeportivo combina potencia brutal con un manejo ágil para
                  brindarte una experiencia de conducción incomparable. Diseñado
                  para desafiar los límites, el Huracan Tecnica incorpora lo
                  último en tecnología de Lamborghini para ofrecerte un
                  rendimiento excepcional en cada curva. Con su estilo audaz y
                  su rendimiento inigualable, este automóvil te llevará al
                  límite de la emoción y la adrenalina.
                </p>
              </div>
              <div
                className={`car-description ${
                  activeOption === 4 ? "" : "none"
                }`}
              >
                <h2>Chevrolet</h2>
                <img src={imgchevrolet} alt="Chevrolet Logo" />
                <p>
                  Siente la potencia americana con el Chevrolet Camaro ZL1. Este
                  muscle car icónico combina un diseño agresivo con un
                  rendimiento excepcional para ofrecerte una experiencia de
                  conducción emocionante y poderosa. Equipado con un motor V8 de
                  alto rendimiento y tecnología avanzada, el ZL1 te brinda un
                  control total sobre la carretera. Ya sea en la pista o en la
                  calle, este automóvil te garantiza una conducción emocionante
                  que dejará una impresión duradera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="NOTICIAS" className="section">
        <h2>Noticias</h2>
        <div className="cards-container">
          <Card
            img={imgbmwM5}
            alt="BMW M5 COMPETITION 2023"
            title="BMW M5 COMPETITION 2023"
            description="El BMW M5 Competition 2023 es una versión de alto rendimiento del sedán de lujo BMW Serie 5.  Equipado con un motor V8 biturbo de alto rendimiento, ofrece una potencia excepcional y un manejo ágil.  Con características exclusivas de la línea M de BMW, como ajustes de suspensión deportiva y detalles exteriores distintivos,  el M5 Competition 2023 es una opción ideal para aquellos que buscan una combinación de lujo y rendimiento deportivo en un sedán de cuatro puertas."
            infolink="https://www.bmw.com.mx/content/dam/bmw/marketMX/bmw_com_mx/Descargas/fichas-tecnicas-2023/bmw-m/Ficha%20Técnica%20BMW-M5-COMPETITION-2023.pdf.asset.1653336106123.pdf"
          />
          <Card
            img={imgFordGT}
            alt="Ford Mustang GT 2024"
            title="Ford Mustang GT 2024"
            description="Este ícono de los muscle cars estadounidenses ofrece un rendimiento potente y un diseño clásico.  Equipado con un motor V8 de alto rendimiento, el Mustang GT proporciona una experiencia de conducción emocionante con una aceleración impresionante y un rugido distintivo.  Con una estética atrevida y características modernas de tecnología y seguridad,  continúa la tradición de la legendaria línea de Mustangs de Ford."
            infolink="https://es.ford.com/cars/mustang/"
          />
          <Card
            img={imgMercedez}
            alt="Mercedes-Benz Clase E 2024"
            title="Mercedes-Benz Clase E 2024"
            description="El Mercedes-Benz Clase E 2024 es una elegante y sofisticada berlina de lujo que combina un diseño refinado con tecnología avanzada y comodidades premium. Con una gama de opciones de motorización, desde motores diésel eficientes hasta motores de gasolina potentes, el Clase E ofrece un equilibrio entre rendimiento y eficiencia. Además, cuenta con características de vanguardia en cuanto a seguridad y conectividad, haciendo del Clase E 2024 una opción destacada para aquellos que buscan lujo y tecnología en un sedán de tamaño medio."
            infolink="https://www.caranddriver.com/es/coches/novedades/a38400966/mercedes-clase-e-2023/"
          />
          <Card
            img={imgNissan}
            alt="Nissan Z Nismo 2024"
            title="Nissan Z Nismo 2024"
            description="El Nissan Z Nismo 2024 es una versión de alto rendimiento del icónico deportivo Nissan Z, que ofrece una experiencia de conducción emocionante y un diseño aerodinámico y agresivo. Equipado con un motor V6 turboalimentado y una suspensión deportiva ajustada, el Z Nismo ofrece un rendimiento excepcional en carretera y en pista. Con detalles exclusivos de la línea Nismo de Nissan, como mejoras aerodinámicas y ajustes de chasis, la opción ideal para los entusiastas de los deportivos que buscan un rendimiento excepcional y un estilo distintivo."
            infolink="https://es.nissanusa.com/vehicles/sports-cars/nissan-z/nismo.html"
          />
          <Card
            img={imgAudi}
            alt="Audi A6 e-tron"
            title="Audi A6 e-tron"
            description="El Audi A6 e-tron es una berlina ejecutiva de lujo totalmente eléctrica que ofrece un rendimiento potente y una autonomía impresionante. Basado en la plataforma modular de electrificación de Audi, el A6 e-tron combina un diseño elegante y aerodinámico con tecnología de vanguardia. Con un tren motriz eléctrico avanzado y características de conducción autónoma de nivel 3, redefiniendo el concepto de lujo y eficiencia en el segmento de las berlinas premium."
            infolink="https://www.audi.es/es/web/es/stories/futuro/una-mirada-al-futuro.html"
          />
          <Card
            img={imgCadillac}
            alt="Cadillac Escalade IQ"
            title="Cadillac Escalade IQ"
            description="Este vehiculo es una versión de alta tecnología del
            
            lujoso SUV de Cadillac que ofrece una experiencia de conducción
            avanzada y comodidades de primera clase. Equipado con el sistema de
            inteligencia artificial de próxima generación de Cadillac, el Escalade
            IQ ofrece características innovadoras como asistencia al conductor
            avanzada, conectividad mejorada y un sistema de entretenimiento de
            última generación. Con un diseño imponente y un interior lujoso, el
            Escalade IQ eleva el estándar de los SUV de lujo en cuanto a
            tecnología y comodidad."
            infolink="https://www.cadillac.com/upcoming-vehicles/escalade-iq"
          />
        </div>
      </section>
      <section id="CONTACTO" className="section">
        <h2>Contacto</h2>
        <div className="form-container">
          <form className="form">
            <div className="form-item">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Nombre Completo" />
            </div>
            <div className="form-item">
              <label>Correo Electrónico</label>
              <input type="text" placeholder="Correo Electrónico" />
            </div>
            <div className="form-item form-textarea">
              <label>Comentarios</label>
              <textarea
                name="comentarios"
                cols="30"
                rows="10"
                placeholder="Deja un Comentario"
              ></textarea>
            </div>
            <input type="submit" />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
// Siuu
