import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/static/user-icon.png';

export const Header = () => {
    return (
   
        <header className="header"> 

            <Link  to="/auth/login">
                <img className="header__img" src={userIcon} alt="Agent Convert" />
            </Link>           
            
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li>
                        <Link to="/auth/login">
                            Iniciar Sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </header>    
    
    )
}


