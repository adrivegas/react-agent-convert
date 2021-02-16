import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { ConvertScreen } from '../components/convert/ConvertScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    /> 

                    <Route 
                        exact
                        path="/"
                        component={ ConvertScreen }
                    /> 

                    <Redirect to='/auth/login' />             
                </Switch>            
            </div>
        </Router>
        
    )
}
