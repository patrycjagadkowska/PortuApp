import { useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { BsPerson } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";

import { auth } from "../../api/auth-api";
import AuthContext from "../../context/AuthContext";
import { useInput } from "../../hooks/useInput";
import CustomInput from "../UI/CustomInput";
import SubmitButton from "../UI/SubmitButton";

import classes from "./styles/AuthForm.module.css";

const LoginForm = () => {
  const email = useInput("");
  const password = useInput("");
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [submitButtonClass, setSubmitButtonClass] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/learn")
    }
  }, [isLoggedIn, navigate]);

  const submitHandler = (event) => {
    event.preventDefault();
    setEmailError();
    setPasswordError();

    setSubmitButtonClass("spin");

    if (email.value.length === 0) {
      setSubmitButtonClass("error");
      setEmailError("Please enter your email.");
      return;
    } else if (password.value.length === 0) {
      setSubmitButtonClass("error");
      setEmailError("Please enter your password.");
      return;
    }

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        setSubmitButtonClass("success");
        const user = userCredential.user;
        login(user.uid);
      })
      .catch((error) => {
        setSubmitButtonClass("error");
        if (error.code === "auth/wrong-password") {
          setPasswordError("Password is incorrect.");
        } else if (error.code === "auth/invalid-email") {
          setPasswordError("Email is incorrect or not registered yet.");
        } else if (error.code === "auth/user-disabled") {
          setPasswordError(
            "Your account has been disabled. Please contact us for more information"
          );
        } else {
          setPasswordError(error.message);
        }
      });
  };

  return (
    <form className={classes.form} autoComplete="on">
      <CustomInput
        type="email"
        value={email.value}
        onChange={email.onChange}
        label={
          <>
            <BsPerson /> Email
          </>
        }
        id="email"
        error={
          emailError && (
            <>
              <BiError /> {emailError}
            </>
          )
        }
      />
      <CustomInput
        type="password"
        value={password.value}
        onChange={password.onChange}
        label={
          <>
            <RiLockPasswordLine /> Password
          </>
        }
        id="password"
        error={
          passwordError && (
            <>
              <BiError /> {passwordError}
            </>
          )
        }
      />
      <SubmitButton onClick={submitHandler} setClass={submitButtonClass}>
        login
      </SubmitButton>
    </form>
  );
};

export default LoginForm;