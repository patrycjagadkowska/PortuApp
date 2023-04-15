import { createContext, useState } from "react";

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
        setIsLoggedIn(false);
        userToken = '';
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