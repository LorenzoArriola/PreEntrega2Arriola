import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const itemDetail = mockData.find(item => item.id === parseInt(itemId));
        setItem(itemDetail);
    }, [itemId]);

    if (!item) return <div>Cargando...</div>;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>Precio: {item.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;