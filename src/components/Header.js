import React from 'react';
import { Link } from 'react-router-dom';
import kinetics from '../assets/static/kinetics.png';

export const Header = () => {
    return (          
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" class="navbar-brand">
                <img src={kinetics} alt="Logo" style={{width:'40%'}}/>
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">
                            Productos
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/tutoriales" class="nav-link">
                            Tutorial
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/planes" class="nav-link">
                            Planes
                        </Link>
                    </li>
                    
                </ul>
                <span class="navbar-text">
                    <Link to="/auth/register" class="nav-link">
                            Registrarse
                        </Link>
                </span>
            </div>
        </nav>
    
    )
}


