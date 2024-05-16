import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    // Número hardcodeado (fijo) para la cantidad de elementos en el carrito
    const itemCount = 3;

    return (
        <div className="cart-widget">
            <img src="src/assets/suitcase-lg-fill.svg" alt="" />
            <FaShoppingCart />
            <span className="badge bg-danger">{itemCount}</span>
        </div>
    );
}

export default CartWidget;