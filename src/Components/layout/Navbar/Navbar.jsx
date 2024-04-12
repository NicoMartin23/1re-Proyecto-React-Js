import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h1>Zap's Store</h1>
      <ul>
        <li>Hombre</li>
        <li>Mujer</li>
        <li>Niño/a</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
