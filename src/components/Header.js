import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import kinetics from './../assets/static/kinetics.png';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = () => {

    // const { user:{ name }, dispatch } = useContext(AuthContext);
    // const history = useHistory();

    // const handleLogout = () => {

    //     history.replace('/login');

    //     dispatch({
    //         type: types.logout
    //     });
    // }

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);
    console.log(name)

    const hanleLogout = () => {
        // history.replace('/login');
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
                    {/* <li className="nav-item">
                        <Link to="/productos" className="nav-link">
                            <h4>Productos</h4>                            
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/tutoriales" className="nav-link">
                            <h4>Tutoriales</h4>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/planes" className="nav-link">
                            <h4>Planes</h4>
                        </Link>
                    </li> */}
                    
                </ul>
                {/* <span className="navbar-text">
                    <Link to="/auth/register" className="nav-link">
                        <h4>Registrarse</h4>
                    </Link>
                </span> */}
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


