import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext'; // Asegúrate de tener la ruta correcta al CartProvider
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart'; // Asegúrate de tener un componente Cart para mostrar el carrito
import './styles/main.css';

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con CartProvider */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Ekun Pets!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Ruta para ver el carrito */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
