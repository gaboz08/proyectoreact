import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Usando react-icons

const CartWidget = () => {
  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <FaShoppingCart />
      <span style={{
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '0.5rem',
      }}>
        3 {}
      </span>
    </div>
  );
};

export default CartWidget;
