import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PublicScreen } from '../public/PublicScreen';
import { Header } from '../Header';
import { Planes } from './Planes';
import { Tutoriales } from './Tutoriales';
import { HomeScreen } from '../public/HomeScreen';

export const ConvertScreen = () => {
    return (
        <Router>
            <div> 
                <Header />

                <Switch>        
                    {/* <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />                      */}

                    {/* <Route 
                        exact
                        path="/"
                        component={ ConvertScreen }
                    />                          */}

                    {/* <Route 
                        exact
                        path="/home"
                        component={ HomeScreen }
                    /> */}
                    
                    <Route 
                        exact
                        path="/tutoriales"
                        component={ Tutoriales }
                    />

                    {/* <Route 
                        exact
                        path="/planes"
                        component={ Planes }
                    /> */}

                    <Redirect to='/tutoriales' />  

          
                </Switch>

                {/* <Footer/>            */}
            </div>
        </Router>
    )
}
