// ItemDetail.js
import React from 'react';
import { useCart } from '../contexts/CartContext'; // Asegúrate de que la ruta al contexto sea correcta

const ItemDetail = ({ product }) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(product, 1); // Suponiendo que añades 1 unidad del producto
    };

    return (
        <div className="item-detail">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
    );
};

export default ItemDetail;

