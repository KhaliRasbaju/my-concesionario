import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <h2>Concesionario</h2>
      <p>Copyright © 2024 Nuestro concesionario. All rights reserved.</p>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Terminos y condiciones</a>
        </li>
        <li>
          <a href="#">Politica de Privacidad</a>
        </li>
      </ul>
      <div className="social-media">
        <a href="https://www.facebook.com/?locale=es_LA">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com/?lang=es">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
