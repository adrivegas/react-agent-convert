import React from 'react';
import { Link } from 'react-router-dom';
import process from '../../assets/static/process.png';

export const HomeScreen = () => {
    return (
        <section className="container margin">
            <div className=" row mt-4">
                <div className="col">
                    <h1 className="display-5 text-center pb-2">Dialogflow Agent Converter</h1>
                    <p className="text-center">Automatiza las tareas de carga manual de información a tus agentes Dialogflow. Esta aplicación te permite generar la estructura completa de tua agente .ZIP compatible con Dialogflow con tan sólo cargar un archivo .CSV</p>             
                    <img src={process} className="mx-auto d-block img-fluid mb-5" alt="Process" style={{width:'60%'}}/>
                    <Link to="/auth/planes" className="d-block text-center">
                        <button type="button" className="btn btn-primary btn-lg">Ver planes</button>
                    </Link>                    
                                  
                </div>
            </div>
        </section>
    )
    // overflow-auto
}
