import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import googleIcon from '../../assets/static/google-icon-color.png';
import twitterIcon from '../../assets/static/twitter-icon-color.png';
import { AuthContext } from '../../auth/AuthContext';
import { signInWithGoogle } from '../../firebase/firebase-config';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = () => {

    // const { dispatch } = useContext( AuthContext );
    const dispatch = useDispatch();
    
    const [ formValues, handleInputChange ] = useForm({
        email: 'adriv@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {

        e.preventDefault();
        dispatch( login( 'email', 1235998 ) );

        // const lastPath = localStorage.getItem('lastPath') || '/';

        // dispatch({
        //     type: types.login,
        //     payload: {
        //         name: 'Adriana'
        //     }
        // });

        // history.replace( '/tutoriales' );
        
    }


    return (

        <section className="container">           

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
                                <button className=" text-center btn btn-primary btn-lg">Iniciar sesión</button>
                            </div>                                                                
                        </fieldset>
                    </form>
                    
                    <section className="text-center">
                        <div><img src={googleIcon} className="img-fluid" style={{width:'10%'}}/> 
                            <button className="btn btn-primary btn-lg" onClick={ signInWithGoogle }>
                            Inicia sesión con Google
                            </button>
                        </div>
                        <div><img src={twitterIcon} className="img-fluid" style={{width:'15%'}}/> Inicia sesión con Twitter</div>
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
