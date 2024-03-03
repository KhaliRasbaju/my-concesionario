import React, { useState } from "react";
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
  const myStyle1 = {
    "--optionBackground": `url(${img6})`,
  };
  const myStyle2 = {
    "--optionBackground": `url(${img5})`,
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

  const [ishandleClick, setIshandleClick] = useState(null);
  const handleClick2 = () => {
    setIshandleClick(!ishandleClick);
  };

  const handleClick = (event) => {
    // Elimina la clase activa de todos los elementos
    document.querySelectorAll(".option").forEach((elemento) => {
      elemento.classList.remove("active");
    });
    // Agrega la clase activa solo al elemento que se hizo clic
    event.target.classList.add("active");
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
      <section id="MODELOS" className="section  modelos">
        <div className="container">
          <div class="options">
            <div class={`option active`} style={myStyle1} onClick={handleClick}>
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">🖤</div>
                <div class="info">
                  <div class="main">Porshe</div>
                  <div class="sub">GT3 R5</div>
                </div>
              </div>
            </div>
            <div class={`option`} style={myStyle2} onClick={handleClick}>
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">❤️</div>
                <div class="info">
                  <div class="main">Tesla</div>
                  <div class="sub">Roadster 2020</div>
                </div>
              </div>
            </div>
            <div class={`option`} style={myStyle3} onClick={handleClick}>
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">💛</div>
                <div class="info">
                  <div class="main">Ferrari</div>
                  <div class="sub">LaFerrari</div>
                </div>
              </div>
            </div>
            <div class={`option`} style={myStyle4} onClick={handleClick}>
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">🧡</div>
                <div class="info">
                  <div class="main">Lamborghini</div>
                  <div class="sub">Huracan</div>
                </div>
              </div>
            </div>
            <div class={`option`} style={myStyle6} onClick={handleClick}>
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">❤️</div>
                <div class="info">
                  <div class="main">Chevrolete</div>
                  <div class="sub">Camaro ZL1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="car-info flex-item">
          <div className="car-description">
            <h2>Porsche</h2>
            <img src={pngporshe} alt="Porshe Logo" className="logo" />
            <p>
              Los atletas lo saben: el máximo rendimiento requiere algo más que
              condiciones perfectas y suerte. El factor decisivo es la voluntad
              incondicional de volverse más rápido y más fuerte con cada sesión
              de entrenamiento. Cuestionarse todo, especialmente a sí mismo. Y
              aprender el máximo de cada error. Porque el mayor desafío es
              permanecer imbatible. Solo con este enfoque, Porsche es capaz de
              seguir ampliando los límites de lo factible. Para un aumento
              adicional del rendimiento en el circuito, gracias a un agarre
              radical y la amplia construcción ligera. Experimente el nuevo 911
              GT3 RS en su máximo rendimiento.
            </p>
          </div>
          <div className="car-description">
            <h2>Tesla</h2>
            <img src={pngporshe} alt="Tesla Logo" className="logo" />
            <p>
              Experimenta la vanguardia de la ingeniería eléctrica con el Tesla
              Roadster 2020. Este automóvil redefine la velocidad y la
              sostenibilidad con su diseño aerodinámico y su potencia
              impresionante. Equipado con tecnología de punta, el Roadster
              ofrece un rendimiento excepcional sin comprometer el medio
              ambiente. Cada curva, cada aceleración, te llevará a un nuevo
              nivel de emoción y eficiencia.
            </p>
          </div>
          <div className="car-description">
            <img src={imgferrari} alt="Ferrari Logo" className="logo" />
            <h2>Ferrari</h2>
            <p>
              La excelencia italiana cobra vida en el Ferrari LaFerrari. Con un
              motor V12 y un sistema híbrido, este superdeportivo encarna la
              perfección en ingeniería y diseño. Cada detalle, desde su
              distintiva carrocería hasta su cabina de lujo, refleja el legado
              de la marca. Con una potencia impresionante y una aerodinámica
              incomparable, el LaFerrari ofrece una experiencia de conducción
              única que combina rendimiento y elegancia en su máxima expresión.
            </p>
          </div>
          <div className="car-description ">
            <img src={pnglamborghini} alt="Logo Porshe" className="logo" />
            <h2>Lamborghini</h2>
            <p>
              Domina la carretera con el Lamborghini Huracan Tecnica. Este
              superdeportivo combina potencia brutal con un manejo ágil para
              brindarte una experiencia de conducción incomparable. Diseñado
              para desafiar los límites, el Huracan Tecnica incorpora lo último
              en tecnología de Lamborghini para ofrecerte un rendimiento
              excepcional en cada curva. Con su estilo audaz y su rendimiento
              inigualable, este automóvil te llevará al límite de la emoción y
              la adrenalina.
            </p>
          </div>
          <div className="car-description ">
            <img src={imgchevrolet} alt="Chevrolet Logo" className="Logo" />
            <h2>Chevrolet</h2>
            <p>
              Siente la potencia americana con el Chevrolet Camaro ZL1. Este
              muscle car icónico combina un diseño agresivo con un rendimiento
              excepcional para ofrecerte una experiencia de conducción
              emocionante y poderosa. Equipado con un motor V8 de alto
              rendimiento y tecnología avanzada, el ZL1 te brinda un control
              total sobre la carretera. Ya sea en la pista o en la calle, este
              automóvil te garantiza una conducción emocionante que dejará una
              impresión duradera.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
