import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { login } from '../actions/auth';
// import { AuthContext } from '../auth/AuthContext';
import { ConvertScreen } from '../components/convert/ConvertScreen';
import { Planes } from '../components/convert/Planes';
import { Tutoriales } from '../components/convert/Tutoriales';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
// import { ConvertRoutes } from './ConvertRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    // const { user } = useContext(AuthContext);
    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }
    
    return (
        <Router>
            <div> 
                <Header />

                <Switch>        
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />                     

                    <Route 
                        exact
                        path="/"
                        component={ ConvertScreen }
                    />                         

                    <PrivateRoute 
                        exact
                        path="/tutoriales"
                        isAuthenticated={ isLoggedIn }
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
