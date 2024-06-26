import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const mockData = [
    //Cajas de suscripcion
    {
        id: 1,
        name: "Suscripción Elfo domestico",
        description: "Cajas Mensuales para elfos domesticos",
        price: "$15.000",
        category: "elfo-domestico",
        image: "src/assets/Cajas/elfo.jpg" 
    },
    {
        id: 2,
        name: "Suscripción Muggle",
        description: "Cajas mensuales para Muggles",
        price: "$30.000",
        category: "muggle",
        image: "src/assets/Cajas/muggles.jpg" 
    },
    {
        id: 3,
        name: "Suscripción Mago",
        description: "Cajas mensuales para Magos",
        price: "$40.000",
        category: "mago",
        image: "src/assets/Cajas/magos.png" 
    },
    //cajas por personajes
    {
        id: 4,
        name: "Mistery Box Hermione",
        description: "Caja especialmente para los Fans de Hermione",
        price: "$30.000",
        category: "boxes",
        image: "src/assets/Cajas/Hermione.png" 
    },
    {
        id: 5,
        name: "Mistery Box Ron",
        description: "Caja especialmente para los Fans de Ron",
        price: "$30.000",
        category: "boxes",
        image: "src/assets/Cajas/ron.png" 
    },
    {
        id: 6,
        name: "Mistery Box Harry",
        description: "Caja especialmente para los Fans de Harry",
        price: "$30.000",
        category: "boxes",
        image: "src/assets/Cajas/Harry.png" 
    }
];

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const filteredItems = categoryId 
            ? mockData.filter(item => item.category === categoryId)
            : mockData;
        setItems(filteredItems);
    }, [categoryId]);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2>{greeting}</h2>
                    <div className="row">
                        {items.map(item => (
                            <div key={item.id} className="col-md-4">
                                <div className="card mb-4">
                                    <img src={item.image} className="card-img-top" alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <Link to={`/item/${item.id}`} className="btn btn-primary">Ver detalles</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;
