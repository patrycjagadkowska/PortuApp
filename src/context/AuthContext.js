import { createContext, useState, useContext } from "react";
import { signOut } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";

import UserProgressContext from "./UserProgressContext";
import DataContext from "./DataContext";

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

    const { setUserData, clearProgressData } = useContext(UserProgressContext);
    const { clearData } = useContext(DataContext);

    const login = async (token) => {
        const progressData = await getDoc(doc(database, "users", token));
        setUserData(progressData.data(), token);
        setUserToken(token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        signOut(auth).then(() => {
          setIsLoggedIn(false);
          setUserToken("");
          clearData();
          clearProgressData();
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