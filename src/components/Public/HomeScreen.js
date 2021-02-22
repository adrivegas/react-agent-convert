import React from 'react';
import { Link } from 'react-router-dom';
import process from '../../assets/static/process.png';

export const HomeScreen = () => {
    return (
        <section className="container mt-5 pb-5">
        
            <h1 class="display-5 text-center pb-2">Dialogflow Agent Converter</h1>
            <p class="text-center">Automatiza las tareas de carga manual de información a tus agentes Dialogflow. Esta aplicación te permite generar la estructura completa de tua agente .ZIP compatible con Dialogflow con tan sólo cargar un archivo .CSV</p>             
            <img src={process} class="mx-auto d-block img-fluid mb-5" alt="Process" style={{width:'60%'}}/>
            <Link to="/auth/planes" class="d-block text-center">
                <button type="button" class="btn btn-primary btn-lg">Ver planes</button>
            </Link>    

        </section>
    )
}
