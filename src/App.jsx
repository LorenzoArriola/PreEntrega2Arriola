import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="¡Bienvenido a Newt's Suitcase!" />
        </div>
    );
}

export default App;