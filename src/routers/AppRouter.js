import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { ConvertScreen } from '../components/convert/ConvertScreen';
import { Planes } from '../components/convert/Planes';
import { Tutoriales } from '../components/convert/Tutoriales';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { AuthRouter } from './AuthRouter';
// import { ConvertRoutes } from './ConvertRoutes';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    // const { user } = useContext(AuthContext);
    
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

                    <Route 
                        exact
                        path="/tutoriales"
                        component={ Tutoriales }
                    />

                    <Route 
                        exact
                        path="/planes"
                        component={ Planes }
                        // isAuthenticated={ user.logged }
                    />

                    <Redirect to='/auth/login' />  

          
                </Switch>

                <Footer/>           
            </div>
        </Router>
        
    )
}
