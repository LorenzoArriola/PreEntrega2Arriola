import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2>{greeting}</h2>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;
