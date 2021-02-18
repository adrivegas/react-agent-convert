import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <section className="container">           

            <div className="row d-flex justify-content-center m-5">
                <div  className="col-5 card border-info ">
                    <form className="card-body">
                        <fieldset className="">
                            <legend className="text-center">Regístrate</legend>                    
                            <div class="form-group">
                                <label for="exampleInputEmail1">Nombre</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Correo</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="correo@mail.com"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                            </div> 
                            <div className="text-center">
                                <button className=" text-center btn btn-primary btn-lg">Registrarme</button>
                            </div>                                                                
                        </fieldset>
                    </form>
                    <Link to="/auth/login" className="text-center">
                        Iniciar sesión
                    </Link>
                </div>
            </div>

        </section>
    )
}
