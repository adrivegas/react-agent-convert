import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Planes } from '../convert/Planes';
import { HomeScreen } from './HomeScreen';
import { Sidebar } from './Sidebar';

export const PublicScreen = () => {
    return (        
        <Router>
            <div> 
                {/* <Sidebar /> */}

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

                    <Route 
                        exact
                        path="/home"
                        component={ HomeScreen }
                    />
                    
                    {/* <Route 
                        exact
                        path="/tutoriales"
                        component={ Tutoriales }
                    /> */}

                    <Route 
                        exact
                        path="/planes"
                        component={ Planes }
                    />

                    {/* <Redirect to='/auth/login' />   */}

          
                </Switch>

                {/* <Footer/>            */}
            </div>
        </Router>
    )
}
