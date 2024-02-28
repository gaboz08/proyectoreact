import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Ekun Pets</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          {/* Ejemplo de categorías dinámicas, asumiendo que tienes más de una */}
          <li className="nav-item">
            <Link className="nav-link" to="/category/1">Comida Natural BARF</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/2">Comida Natural Cocida</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/3">Comida Natural BARF Especial</Link>
          </li>
          {/* Puedes agregar más categorías siguiendo el mismo patrón */}
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
