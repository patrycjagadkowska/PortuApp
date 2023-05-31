import { createContext, useState } from "react";
import { signOut } from 'firebase/auth';

import { auth } from '../api/auth-api';

const initialData = {
    isLoggedIn: false,
    userToken: '',
    login: (token) => {},
    logout: () => {}
};

const AuthContext = createContext(initialData);

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    let userToken;

    const login = (token) => {
        userToken = token;
        setIsLoggedIn(true);
    };

    const logout = () => {
        signOut(auth).then(() => {
          setIsLoggedIn(false);
          userToken = "";
        }).catch((error) => {
            console.log(error.message);
        });
    }

    const ctxValue = {
        isLoggedIn: isLoggedIn,
        userToken: userToken,
        login: login,
        logout: logout
    };

    return (
        <AuthContext.Provider value={ctxValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;