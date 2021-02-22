import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import googleIcon from '../../assets/static/google-icon-color.png';
import twitterIcon from '../../assets/static/twitter-icon-color.png';
import { AuthContext } from '../../auth/AuthContext';
import { signInWithGoogle } from '../../firebase/firebase-config';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import { Sidebar } from '../public/Sidebar';

export const LoginScreen = () => {

    // const { dispatch } = useContext( AuthContext );
    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );
    
    const [ formValues, handleInputChange ] = useForm({
        email: 'adriv@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {

        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );

        // const lastPath = localStorage.getItem('lastPath') || '/';

        // dispatch({
        //     type: types.login,
        //     payload: {
        //         name: 'Adriana'
        //     }
        // });

        // history.replace( '/tutoriales' );
        
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (

        <section className="container">    
        {/* <Sidebar />        */}

            <div className="row d-flex justify-content-center m-5">
                <div  className="col-5 card border-info">
                    <form className="card-body" onSubmit={ handleLogin }>
                        <fieldset className="">
                            <legend className="text-center">Inicia sesión</legend>                   
                            <div className="form-group">
                                <label for="exampleInputEmail1">Correo</label>
                                <input
                                    type="email" 
                                    name="email"
                                    className="form-control"  
                                    placeholder="correo@mail.com"
                                    value={ email }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="Contraseña"
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                            </div> 
                            <div className="text-center">
                                <button 
                                    type="submit"
                                    className=" text-center btn btn-primary btn-lg"
                                    disabled={ loading }
                                >
                                    Iniciar sesión
                                </button>
                            </div>                                                                
                        </fieldset>
                    </form>
                    
                    <section className="text-center">
                        <div onClick={ handleGoogleLogin }>
                            <img src={googleIcon} className="img-fluid" style={{width:'10%'}}/> 
                            Inicia sesión con Google
                        </div>
                        {/* <div>
                            <img src={twitterIcon} className="img-fluid" style={{width:'15%'}}/>
                            Inicia sesión con Twitter
                        </div> */}
                    </section>
                    <p className="text-center">No tienes ninguna cuenta  
                        <Link to ="/auth/register">
                            Regístrate
                        </Link>                
                    </p>
                </div>            
            </div>

        </section>
       
    )
}
