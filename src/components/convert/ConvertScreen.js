import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Header } from '../Header';
import { Tutoriales } from './Tutoriales';

export const ConvertScreen = () => {
    return (
        <Router>
            <div> 
                <Header />

                <Switch>   

                    <Route 
                        exact
                        path="/tutoriales"
                        component={ Tutoriales }
                    />

                    <Redirect to='/tutoriales' /> 
                    
                </Switch>
            </div>
        </Router>
    )
}
