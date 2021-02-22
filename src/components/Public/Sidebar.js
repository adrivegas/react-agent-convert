import React from 'react';
import { Link } from 'react-router-dom';
import kinetics from './../../assets/static/kinetics.png';

export const Sidebar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">
                <img src={kinetics} alt="Logo" style={{width:'40%'}}/>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link to="/auth/home" className="nav-link">
                            <h4>Home</h4>                            
                        </Link>
                    </li>                   
                    <li className="nav-item">
                        <Link to="/auth/planes" className="nav-link">
                            <h4>Planes</h4>
                        </Link>
                    </li>
                    
                </ul>               
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">                   
                    <button 
                        className="nav-item nav-link btn"
                    > 
                        <Link to="/auth/login" className="nav-link">
                            <h4>Login</h4>
                        </Link>                        
                    </button>
                </ul>
            </div>
        </nav>
    )
}
