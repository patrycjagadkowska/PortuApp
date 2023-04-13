import { useLocation, useNavigation } from "react-router";
import { useState, useEffect } from "react";

import CreateAccountForm from "../components/AuthForms/CreateAccountForm";
import LoginForm from "../components/AuthForms/LoginForm";

import classes from './styles/Authentication.module.css';

const Authentication = () => {
    const { pathname } = useLocation();
    const navigate = useNavigation();
    const [ renderLoginForm, setRenderLoginForm ] = useState();
    
    useEffect(() => {
        if (pathname === '/login') {
            setRenderLoginForm(true);
        } else if (pathname === '/createAccount') {
            setRenderLoginForm(false);
        } else {
            navigate('/login');
        }
    }, [pathname, navigate]);

    return (
      <div className={classes.auth}>
        {renderLoginForm !== undefined && (
          <h1 className={classes["auth__header"]}>
            Please enter your data to{" "}
            {renderLoginForm ? "login" : "create account"}
          </h1>
        )}
        {renderLoginForm && <LoginForm />}
        {renderLoginForm === false && <CreateAccountForm />}
      </div>
    );
};

export default Authentication;