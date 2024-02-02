// src/App.js
import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ProductList from './Components/ProductList'; 
import './styles/main.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Ekun Pets!" />
      <ProductList /> {/* Incluye el componente de la lista de productos aquí */}
    </>
  );
}

export default App;
