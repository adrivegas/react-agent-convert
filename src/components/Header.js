import React from 'react';
import { Link } from 'react-router-dom';
import kinetics from './../assets/static/kinetics.png';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (          
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/home" className="navbar-brand">
                <img src={kinetics} alt="Logo" style={{width:'40%'}}/>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto ">                    
                    <li className="nav-item">
                        <Link to="/tutoriales" className="nav-link">
                            <h4>Tutoriales</h4>
                        </Link>
                    </li>                   
                </ul>                
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info"> 
                        { name }
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ hanleLogout }                        
                    > 
                        <h5>Logout</h5>
                    </button>
                </ul>
            </div>

        </nav>
    
    )
}


