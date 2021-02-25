import React from 'react';
import { Provider } from 'react-redux';
// import { AuthContext } from './auth/AuthContext';
// import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

// const init = () => {
//     return JSON.parse(localStorage.getItem('user')) || { logged: false };
// }

export const AgentConvertApp = () => {

    // const [user, dispatch] = useReducer(authReducer, {}, init);

    // useEffect(() => {
    //     localStorage.setItem( 'user', JSON.stringify(user) );
    // }, [user])

    return (
        // <AuthContext.Provider value={{ user, dispatch }}>
        //     <AppRouter />
        // </AuthContext.Provider>
        <Provider store={ store }>
            <AppRouter />
        </Provider>

    )
}
