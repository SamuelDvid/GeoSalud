import Link from "next/link";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar-container">
        <h2>
          <div className="dropdown">
            Ingreso
            <div className="dropdown-content">
              <a href="/inicio">Usuario</a>
              <a href="#">Eps</a>
            </div>
          </div>
        </h2>

        <h2>
          <Link className="navbar" href="/nosotros">
            Sobre Nosotros
          </Link>
        </h2>
        <h2>
          <div className="dropdown">
            Nuestros Aliados
            <div className="dropdown-content">
              <a href="">Mutual Ser</a>
              <a href="">Salud Total</a>
              <a href="">Sanitas</a>
            </div>
          </div>
        </h2>
        <h2>
          <div className="dropdown">
            Contactanos
            <div className="dropdown-content">
              <a href="#">Ayuda</a>
              <a href="#">Soporte</a>
            </div>
          </div>
        </h2>
      </nav>
    </div>
  );
}
