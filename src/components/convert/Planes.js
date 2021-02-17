import React from 'react';
import { Link } from 'react-router-dom';

export const Planes = () => {
    return (

        <section className="container mt-5">
            
            <h1 class="display-5 text-center mb-5">¡Selecciona el mejor plan para ti!</h1>              

            <div className= 'p-3 d-flex justify-content-around mb-5'>   

                <div class="card border-primary mb-3 text-center" style={{maxWidth: '20rem'}}>
                    <div class="card-header"><h4>Básico</h4></div>
                    <div class="card-body">
                        <h4 class="card-title">30 días</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/auth/login">
                            <button type="button" class="btn btn-primary">Obtener plan</button>
                        </Link>
                    </div>
                </div>            

                <div className="card border-primary mb-3 text-center" style={{maxWidth: '20rem'}}>
                    <div className="card-header"><h4>Intermedio</h4></div>
                    <div className="card-body">
                        <h4 className="card-title">6 meses</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/auth/login">
                            <button type="button" class="btn btn-primary">Obtener plan</button>
                        </Link>
                    </div>
                </div>

                <div className="card border-primary mb-3 text-center" style={{maxWidth: '20rem'}}>
                    <div className="card-header"><h4>Avanzado</h4></div>
                    <div className="card-body">
                        <h4 className="card-title">1 año</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/auth/login">
                            <button type="button" class="btn btn-primary">Obtener plan</button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
        
    )
}
