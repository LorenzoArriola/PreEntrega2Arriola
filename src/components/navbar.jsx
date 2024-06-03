import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartWidget from './CartWidget';
import "./est.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className='suitcase' src="src/assets/suitcase.jpeg" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <div className="collapse navbar-collapse"  id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/category/boxes">Boxes</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Suscripción
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/category/elfo-domestico">Elfo Doméstico</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/category/muggle">Muggle</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/category/mago">Mago</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="#">Nosotros</Link>
                            </li>
                            <li className='nav-item'>
                            <a className='nav-link active' href="#"><img src="src/assets/suitcase-lg-fill.svg" alt="" /></a>
                            </li>
                        </ul>
                        
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

