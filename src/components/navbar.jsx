import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Newt´s Suitcase</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <div className="collapse navbar-collapse"  id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Boxes</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Suscripcion
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Elfo domestico</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Muggle</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Mago</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-disabled="true" href="#">Nosotros</a>
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