import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { Planes } from '../components/convert/Planes';
import { HomeScreen } from '../components/public/HomeScreen';
import { Sidebar } from '../components/public/Sidebar';

export const AuthRouter = () => {
    return (
        
        <Router>
            <div>
                <Sidebar />
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ LoginScreen }
                    /> 

                    <Route 
                        exact
                        path="/auth/register"
                        component={ RegisterScreen }
                    /> 

                    <Route 
                        exact
                        path="/auth/planes"
                        component={ Planes }
                    />

                    <Route 
                        exact
                        path="/auth/home"
                        component={ HomeScreen }
                    />  

                    <Redirect to='/auth/home' />         
                </Switch> 
            </div>
        </Router>
        
        
            
                
            
     
    )
}
