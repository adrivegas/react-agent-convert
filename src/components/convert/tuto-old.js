import React from 'react';
import { Link } from 'react-router-dom';

export const Tutoriales = () => {
    return (
        
        <section className="container mt-5">
            <h1 class="display-5 text-center mb-3">Instrucciones de Uso</h1>    
            <div className= 'p-3 d-flex justify-content-around'>             

                <div class="card-body">
                        <h4 class="card-title">1</h4>
                        <p class="card-text">Prepara el formato tecnico .CSV de tu agente. <small>Puedes descargar una plantilla de ejemplo</small></p>
                        
                    </div>

                    <div class="card-body">
                        <h4 class="card-title">2</h4>
                        <p class="card-text">Pulsa la opción "cargar archivo" para iniciar el proceso de conversión</p>
                        
                    </div>    
                
                    <div class="card-body">
                        <h4 class="card-title">2</h4>
                        <p class="card-text">De forma automática iniciará la descarga del agente Dialogflow formato . ZIP </p>
                        
                    </div>        

                    

            </div>  

            <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-primary btn-lg mr-3">Cargar archivo</button>
            <button type="button" class="btn btn-info btn-lg ml-3">Descargar Plantilla</button>
            </div>   
            <div className="d-flex justify-content-center mt-3">
            <button type="button" class="btn btn-secondary btn-lg mr-3">Convertir</button>            
            </div>            

        </section>
        
    )
}
