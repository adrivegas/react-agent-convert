import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/static/user-icon.png';

export const Header = () => {
    return (           
      
        <header>            
            <div>
            {/* <Link  to="/auth/login">
                <img  src={userIcon} alt="Agent Convert" />
            </Link> */}
                <ul>
                    <li>
                        <Link to="/auth/login">
                            Home
                        </Link>                        
                    </li>
                    <li>
                        <Link to="/auth/login">
                            Tutoriales
                        </Link>
                    </li>
                    <li>
                        <Link to="/auth/login">
                            Planes
                        </Link>
                    </li>
                    <li  className="active" style={{float: 'right'}}>
                        <Link to="/auth/login">
                            Iniciar Sesión
                        </Link>
                    </li>
                </ul>
           
            </div> 

        </header> 
    
    )
}


