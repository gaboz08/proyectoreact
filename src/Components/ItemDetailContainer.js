// ItemDetailContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products'; // Asegúrate de que esta ruta sea correcta

function ItemListContainer() {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      const filtered = products.filter(product => product.categoryId === parseInt(categoryId));
      setFilteredProducts(filtered);
    }, [categoryId]);
  
    return (
      <div>
        {/* Renderiza los productos filtrados aquí */}
      </div>
    );
  }
  
  export default ItemListContainer;