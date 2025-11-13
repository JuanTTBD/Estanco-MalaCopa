import React, { useEffect } from "react";
import M from "materialize-css";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
  }, []);

  return (
    <>
      <nav className="nav-estanco black">
        <div className="nav-content">
          
          {/*  Logo izquierda */}
          <Link to="/" className="brand-logo logo-animada">
            <span className="logo-estanco">Estanco</span>{" "}
            <span className="logo-malacopa">MalaCopa</span>
          </Link>

          {/*  Menú derecha */}
          <ul className="nav-links right elegant-font">
            <li><Link to="/" className="white-text nav-item">Inicio</Link></li>
            <li><Link to="/productos" className="white-text nav-item">Productos</Link></li>
            <li><Link to="/nosotros" className="white-text nav-item">Nosotros</Link></li>
            <li><Link to="/contacto" className="white-text nav-item">Contacto</Link></li>
            {location.pathname === "/productos" && (
              <li><Link to="/carrito" className="white-text nav-item">Carrito 🛒</Link></li>
            )}
          </ul>

          {/* ☰ Menú móvil */}
          <a href="#" data-target="mobile-demo" className="sidenav-trigger white-text right">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <ul className="sidenav nav-mobile elegant-font" id="mobile-demo">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        {location.pathname === "/productos" && (
          <li><Link to="/carrito">Carrito 🛒</Link></li>
        )}
      </ul>
    </>
  );
}
