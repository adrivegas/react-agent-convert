import React from 'react';
import { Link } from 'react-router-dom';
import process from '../../assets/static/process.png';

export const ConvertScreen = () => {
    return (
        <section className="container mt-5">

            <h1 class="display-5 text-center">Dialogflow Agent Convert</h1>             
            <img src={process} class="mx-auto d-block img-fluid mb-5" alt="Process" style={{width:'60%'}}/>
            <Link to="/planes" class="d-block text-center">
                <button type="button" class="btn btn-primary btn-lg">Comprar</button>
            </Link>    

        </section>
    )
}
