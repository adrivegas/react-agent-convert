import React from 'react';
import { Link } from 'react-router-dom';
import kinetics from '../assets/static/kinetics.png';

export const Header = () => {
    return (          
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">
                <img src={kinetics} alt="Logo" style={{width:'40%'}}/>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <h4>Productos</h4>                            
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tutoriales" className="nav-link">
                            <h4>Tutorial</h4>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/planes" className="nav-link">
                            <h4>Planes</h4>
                        </Link>
                    </li>
                    
                </ul>
                <span className="navbar-text">
                    <Link to="/auth/register" className="nav-link">
                        <h4>Registrarse</h4>
                    </Link>
                </span>
            </div>
        </nav>
    
    )
}


