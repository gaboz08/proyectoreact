import React from 'react';
import { useCart } from '../contexts/CartContext'; // Importa el hook useCart

const Cart = () => {
  const { cartItems, removeItem } = useCart();

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;

