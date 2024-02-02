import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      {/* Asegúrate de que todos los Link estén dentro de un componente que sea descendiente de <Router> */}
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre Nosotros</Link>
    </nav>
  );
}

export default NavBar;
