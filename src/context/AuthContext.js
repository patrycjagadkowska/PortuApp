import { createContext, useState, useContext, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";

import UserProgressContext from "./UserProgressContext";
import DataContext from "./DataContext";

import { auth } from "../api/auth-api";

const initialData = {
  isLoggedIn: false,
  userToken: "",
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(initialData);

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userToken, setUserToken] = useState();

  const { setUserData, clearProgressData } = useContext(UserProgressContext);
  const { clearData } = useContext(DataContext);

  const login = async (token) => {
    setUserData(token);
    setUserToken(token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        setUserToken("");
        clearData();
        clearProgressData();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        login(user.uid);
      }
    });
    // eslint-disable-next-line
  }, []);

  const ctxValue = {
    isLoggedIn,
    userToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;