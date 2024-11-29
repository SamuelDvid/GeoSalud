import Link from "next/link";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar-container">
        <h2>
          <Link className="navbar" href="/inicio">
            Ingreso
          </Link>
        </h2>
        <h2>
          <Link className="navbar" href="/nosotros">
            Sobre Nosotros
          </Link>
        </h2>
        <h2>
          <Link className="navbar" href="/inicio">
            Nuestros Aliados
          </Link>
        </h2>
        <h2>
          <Link className="navbar" href="/inicio">
            Ayuda y Soporte
          </Link>
        </h2>
      </nav>
    </div>
  );
}
