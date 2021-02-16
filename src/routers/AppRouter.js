import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { ConvertScreen } from '../components/convert/ConvertScreen';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div> 
                <Header />
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
                <Footer/>           
            </div>
        </Router>
        
    )
}
