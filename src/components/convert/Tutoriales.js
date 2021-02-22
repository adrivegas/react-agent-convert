import React from 'react';
import { Link } from 'react-router-dom';

export const Tutoriales = () => {
    return (
        
        <section className="container mt-5 pb-5">
            
            <h1 class="display-5 text-center mb-3">Instrucciones de Uso</h1>   

            <div class="row row-cols-2 mb-5">
                <div class="col text-right"><h1>1</h1></div>
                <div class="col text-left">
                    <p>Prepara el formato tecnico .CSV de tu agente. <small>Puedes descargar una plantilla de ejemplo</small></p>
                    <button type="button" class="btn btn-info btn-lg ml-3">Descargar Plantilla</button>
                </div>
            
            </div>

            <div class="row row-cols-2 mb-5">
                <div class="col text-right">
                    <p>Pulsa la opción "cargar archivo" para iniciar el proceso de conversión</p>
                    <button type="button" class="btn btn-primary btn-lg mr-3">Cargar archivo</button>
                </div>
                <div class="col text-left"><h1>2</h1></div>
            
            </div>

            <div class="row row-cols-2 mb-5">
                <div class="col text-right"><h1>3</h1></div>
                <div class="col text-left">
                    <p>De forma automática iniciará la descarga del agente Dialogflow formato . ZIP</p>
                    <button type="button" class="btn btn-secondary btn-lg mr-3">Convertir</button>
                </div>
            
            </div>

        </section>
        
    )
}
