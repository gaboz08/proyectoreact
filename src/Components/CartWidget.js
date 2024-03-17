// CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext'; // Asegúrate de que la ruta al contexto sea correcta

const CartWidget = () => {
  const { cartItems } = useCart();

  // Calcula la cantidad total de ítems en el carrito
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <FaShoppingCart />
      <span style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '0.5rem',
      }}>
        {itemCount}
      </span>
    </div>
  );
};

export default CartWidget;
