export default function Footer() {

  return (
    <div className="footer">
      
      <h2>Footer</h2>
      <p>Copyright © 2024 Mi concesionario. All rights reserved.</p>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Terminos servicios</a>
        </li>
        <li>
          <a href="#">Politica de Privacidad</a>
        </li>
      </ul>
      <div className="social-media">
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </div>
    </div>
  );
}
