import React from 'react';
import userIcon from '../assets/static/user-icon.png';

export const Header = () => {
    return (
   
        <header className="header">            
            <img className="header__img" src={userIcon} alt="Agent Convert" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>    
    
    )
}


