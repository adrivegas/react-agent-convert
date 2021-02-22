import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: 'Adriana',
        email: 'adri@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name ,email ,password ,password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        // if ( isFormValid() ) {
        //     dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        // }
        const isFormValid = () => {
        
            if ( name.trim().length === 0 ) {
                // dispatch( setError('El nombre es requerido') )
                console.log('El nombre es requerido');
                return false;
            } else if ( !validator.isEmail( email ) ) {
                // dispatch( setError('Correo no válido') )
                console.log('Correo no válido')
                return false;
            } else if ( password !== password2 || password.length < 5 ) {
                // dispatch( setError('Password should be at least 6 characters and match each other') )
                console.log('Password should be at least 6 characters and match each other')
                return false
            }
            
            // dispatch( removeError() );
            return true;
        }

    }

    return (
        <section className="container">           

            <div className="row d-flex justify-content-center m-5">
                <div  className="col-5 card border-info ">
                    <form className="card-body" onSubmit={ handleRegister }>
                        <fieldset className="">
                            <legend className="text-center">Regístrate</legend>                    
                            <div className="form-group">
                                <label for="exampleInputEmail1">Nombre</label>
                                <input                                     
                                    className="form-control"                                     
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                    autoComplete="off"
                                    value={ name }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Correo</label>
                                <input
                                    type="email" 
                                    class="form-control" 
                                    placeholder="correo@mail.com"
                                    value={ email }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ingresa una contraseña</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Contraseña"
                                    name="password"
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                            </div> 
                            <div class="form-group">
                                <label for="exampleInputPassword1">Confirmar contraseña</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Confirme su contraseña"
                                    name="password2"
                                    value={ password2 }
                                    onChange={ handleInputChange }
                                />
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
