import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {

    const itemCount = 3;

    return (
        <div className="cart-widget">

            <FaShoppingCart />
            <span className="badge bg-danger">{itemCount}</span>
        </div>
    );
}

export default CartWidget;