// src/components/ProductItem.js
import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
      {/* Aquí puedes añadir una imagen o un botón de "añadir al carrito" */}
    </div>
  );
}

export default ProductItem;
