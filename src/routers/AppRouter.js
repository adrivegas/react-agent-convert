import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { login } from '../actions/auth';
import { ConvertScreen } from '../components/convert/ConvertScreen';
import { Footer } from '../components/Footer';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

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

                <Switch>        
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />
                    
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"                        
                        component={ ConvertScreen }
                    />

                    <Redirect to='/auth/home' />  

                </Switch>

                <Footer/>  

            </div>
        </Router>
    )
}
