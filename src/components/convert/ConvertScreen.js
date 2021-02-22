import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import process from '../../assets/static/process.png';
import { PublicScreen } from '../Public/PublicScreen';
import { Header } from '../Header';
import { Planes } from './Planes';
import { Sidebar } from '../Public/Sidebar';
import { Tutoriales } from './Tutoriales';

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

                    <Route 
                        exact
                        path="/productos"
                        component={ PublicScreen }
                    />
                    
                    <Route 
                        exact
                        path="/tutoriales"
                        component={ Tutoriales }
                    />

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
