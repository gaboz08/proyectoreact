// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <Link to={`/item/${product.id}`}>
        <h3>{product.name}</h3>
      </Link>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
    </div>
  );
}

export default ProductItem;
