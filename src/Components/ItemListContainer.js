import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>{greeting}</h2>
      {/* Aquí irá la lista de productos */}
    </div>
  );
};

export default ItemListContainer;
