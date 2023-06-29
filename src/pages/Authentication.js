import { useLocation, useNavigation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

import CreateAccountForm from "../components/AuthForms/CreateAccountForm";
import LoginForm from "../components/AuthForms/LoginForm";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import classes from "./styles/Authentication.module.css";

const Authentication = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [renderLoginForm, setRenderLoginForm] = useState();
  const { state } = useNavigation();

  useEffect(() => {
    if (pathname === "/login") {
      setRenderLoginForm(true);
    } else if (pathname === "/createAccount") {
      setRenderLoginForm(false);
    } else {
      navigate("/login");
    }
  }, [pathname, navigate]);

  return (
    <section className={classes.auth}>
      {renderLoginForm && state === "loading" && <LoadingSpinner />}
      {renderLoginForm !== undefined && (
        <h1 className={classes["auth__header"]}>
          Please enter your data to{" "}
          {renderLoginForm ? "login" : "create account"}
        </h1>
      )}
      {renderLoginForm && <LoginForm />}
      {!renderLoginForm && <CreateAccountForm />}
    </section>
  );
};

export default Authentication;