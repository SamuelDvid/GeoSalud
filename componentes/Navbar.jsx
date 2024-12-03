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
              <a href="/usuario">Usuario</a>
              <a href="/eps">Eps</a>
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
          <Link href="https://wa.me/3003264021">Contactanos</Link>
        </h2>
      </nav>
    </div>
  );
}
