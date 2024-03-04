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

export function Main() {
  const d = document;
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

  const handleClickCarOption = (event) => {
    // Elimina la clase activa de todos los elementos
    d.querySelectorAll(".option").forEach((elemento) => {
      elemento.classList.remove("active");
    });
    // Agrega la clase activa solo al elemento que se hizo clic
    event.target.classList.add("active");
  };
  const [activeOption, setActiveOption] = useState(0);
  const handleClickOption = (index) => {
    setActiveOption(index);
  };
  return (
    <div>
      <section id="INICIO">
        <article className="container-inicio">
          <div className="contenido">
            <h1>UNA MARAVILLA DE LA INGENIERÍA</h1>
            <h2>ÚNETE AHORA !</h2>
          </div>
          <video className="video" width="600" height="auto" autoPlay loop>
            <source src={video} />
          </video>
        </article>
      </section>
      <section id="MODELOS" className="section">
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
          </div>
          <div className="container-car flex-item flex-grow">
            <div className="car-info ">
              <div
                className={`car-description ${
                  activeOption === 0 ? "" : "none"
                }`}
              >
                <h2>Porsche</h2>
                <img src={pngporshe} alt="Porshe Logo" className="logo" />
                <p>
                  Los atletas lo saben: el máximo rendimiento requiere algo más
                  que condiciones perfectas y suerte. El factor decisivo es la
                  voluntad incondicional de volverse más rápido y más fuerte con
                  cada sesión de entrenamiento. Cuestionarse todo, especialmente
                  a sí mismo. Y aprender el máximo de cada error. Porque el
                  mayor desafío es permanecer imbatible. Solo con este enfoque,
                  Porsche es capaz de seguir ampliando los límites de lo
                  factible. Para un aumento adicional del rendimiento en el
                  circuito, gracias a un agarre radical y la amplia construcción
                  ligera. Experimente el nuevo 911 GT3 RS en su máximo
                  rendimiento.
                </p>
              </div>
              <div
                className={`car-description ${
                  activeOption === 1 ? "" : "none"
                }`}
              >
                <h2>Tesla</h2>
                <img src={pngtesla} alt="Tesla Logo" className="logo" />
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
                <img src={imgferrari} alt="Ferrari Logo" className="logo" />
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
                <img src={pnglamborghini} alt="Logo Porshe" className="logo" />
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
                <img src={imgchevrolet} alt="Chevrolet Logo" className="logo" />
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
            title="Lamborghini Uracan"
            date="14/05/2024"
            img={img1}
            alt="Lamborghini"
            description="El mejor Lambo"
          />
          <Card
            title="Lamborghini Uracan"
            date="14/05/2024"
            img={img1}
            alt="Lamborghini"
            description="El mejor Lambo"
          />
          <Card
            title="Lamborghini Uracan"
            date="14/05/2024"
            img={img1}
            alt="Lamborghini"
            description="El mejor Lambo"
          />
          <Card
            title="Lamborghini Uracan"
            date="14/05/2024"
            img={img1}
            alt="Lamborghini"
            description="El mejor Lambo"
          />
        </div>
      </section>
      <section id="CONTACTO" className="section">
        <h2>Contacto</h2>
        <div className="form-container">
          <form className="form">
            <div>
              <label>Nombre Completo</label>
              <input type="text" placeholder="Nombre Completo" />
            </div>
            <div>
              <label>Correo Electrónico</label>
              <input type="text" placeholder="Correo Electrónico" />
            </div>
            <textarea
              name="comentarios"
              cols="30"
              rows="10"
              placeholder="Deja un Comentario"
            ></textarea>
            <input type="submit" />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
