import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { Tutoriales } from '../components/convert/Tutoriales';
import { Header } from '../components/Header';

export const ConvertRoutes = () => {
    return (
        <>
            <Header />

            <div>
                <Switch>
                    <Route 
                        exact
                        path="/tutoriales"
                        component={ Tutoriales }
                    />

                    <Redirect to="/tutoriales" />
                </Switch>
            </div>
            
        </>
    )
}
