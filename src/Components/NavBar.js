
import React from 'react';
import CartWidget from './CartWidget.js'; 
import '../styles/NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Ekun Pets</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
          {}
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
