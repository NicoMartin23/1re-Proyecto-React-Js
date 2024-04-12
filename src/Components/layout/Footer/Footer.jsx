import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>¡Suscríbete a nuestro boletín!</h2>
          <p>Recibe las últimas noticias y ofertas especiales.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Ingresa tu correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
        <div className="footer-links">
          <h2>Enlaces útiles</h2>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h2>Síguenos</h2>
          <div className="social-icons">
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
