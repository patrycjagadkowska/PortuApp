import { createContext, useState, useContext } from "react";
import { signOut } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import UserProgressContext from "./UserProgressContext";

import { auth } from '../api/auth-api';
import { database } from "../api/database-api";

const initialData = {
    isLoggedIn: false,
    userToken: '',
    login: (token) => {},
    logout: () => {}
};

const AuthContext = createContext(initialData);

export const AuthContextProvider = props => {
    const [ isLoggedIn, setIsLoggedIn ] = useState();
    const [ userToken, setUserToken ] = useState();

    const { setUserData } = useContext(UserProgressContext);

    const login = async (token) => {
        const progressData = await getDoc(doc(database, "users", token));
        setUserData(progressData, token);
        setUserToken(token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        signOut(auth).then(() => {
          setIsLoggedIn(false);
          setUserToken("");
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