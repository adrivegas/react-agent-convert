import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/static/google-icon-color.png';
import twitterIcon from '../../assets/static/twitter-icon-color.png';

export const LoginScreen = () => {
    return (

        <section className="container">           

            <div className="row d-flex justify-content-center m-5">
                <div  className="col-5 card border-info">
                    <form className="card-body">
                        <fieldset className="">
                            <legend className="text-center">Inicia sesión</legend>                   
                            <div class="form-group">
                                <label for="exampleInputEmail1">Correo</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="correo@mail.com"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                            </div> 
                            <div className="text-center">
                                <button className=" text-center btn btn-primary btn-lg">Iniciar sesión</button>
                            </div>                                                                
                        </fieldset>
                    </form>
                    
                    <section className="text-center">
                        <div><img src={googleIcon} className="img-fluid" style={{width:'10%'}}/> Inicia sesión con Google</div>
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
