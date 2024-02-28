// ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products'; // Verifica que la ruta al archivo sea correcta.

function ItemListContainer() {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      // Asegúrate de que categoryId es un número y coincide con el tipo de dato de product.categoryId.
      const filtered = products.filter(product => product.categoryId.toString() === categoryId);
      setFilteredProducts(filtered);
    } else {
      // Si no hay categoryId, muestra todos los productos.
      setFilteredProducts(products);
    }
  }, [categoryId]);

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {/* Añade más detalles del producto que desees mostrar */}
          </div>
        ))
      ) : (
        <p>No hay productos para mostrar en esta categoría.</p>
      )}
    </div>
  );
}

export default ItemListContainer;
