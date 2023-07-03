import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import { useNavigate } from "react-router";

import { auth } from "../../api/auth-api";
import CustomInput from "../UI/CustomInput";
import { useInput } from "../../hooks/useInput";
import SubmitButton from "../UI/SubmitButton";

import classes from "./styles/AuthForm.module.css";

const CreateAccountForm = () => {
  const email = useInput("");
  const password = useInput("");
  const repeatedPassword = useInput("");
  const [emailError, setEmailError] = useState();
  const [passError, setPassError] = useState();
  const [repeatedPassError, setRepeatedPassError] = useState();
  const navigate = useNavigate();
  const [submitButtonClass, setSubmitButtonClass] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    setEmailError();
    setPassError();
    setRepeatedPassError();

    setSubmitButtonClass("spin");

    if (email.value.length === 0) {
      setSubmitButtonClass("error");
      setEmailError("Please enter your email");
      return;
    } else if (password.value.length === 0) {
      setSubmitButtonClass("error");
      setPassError("Please enter you password");
      return;
    } else if (repeatedPassword.value.length === 0) {
      setSubmitButtonClass("error");
      setRepeatedPassError("Please repeat your password");
      return;
    } else if (password.value !== repeatedPassword.value) {
      setSubmitButtonClass("error");
      setRepeatedPassError("Passwords are not equal");
      return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        setSubmitButtonClass("success");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        setSubmitButtonClass("error");
        if (error.code === "auth/email-already-in-use") {
          setRepeatedPassError("This email is already registered");
        } else if (error.code === "auth/network-request-failed") {
          setRepeatedPassError("Network error occured");
        } else if (error.code === "auth/too-many-requests") {
          setRepeatedPassError(
            "We're sorry, we got too many requests. Please try again later."
          );
        } else {
          setRepeatedPassError(error.message);
        }
      });
  };

  return (
    <form className={classes.form} autoComplete="on">
      <CustomInput
        value={email.value}
        onChange={email.onChange}
        label={
          <>
            <BsPerson /> Email
          </>
        }
        type="email"
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
        value={password.value}
        onChange={password.onChange}
        label={
          <>
            <RiLockPasswordLine /> Password
          </>
        }
        type="password"
        id="password"
        error={
          passError && (
            <>
              <BiError /> {passError}
            </>
          )
        }
      />
      <CustomInput
        value={repeatedPassword.value}
        onChange={repeatedPassword.onChange}
        label={
          <>
            <RiLockPasswordLine /> Repeat password
          </>
        }
        type="password"
        id="repeated-password"
        error={
          repeatedPassError && (
            <>
              <BiError /> {repeatedPassError}
            </>
          )
        }
      />
      <SubmitButton
        onClick={submitHandler}
        className={classes["create-account-button"]}
        setClass={submitButtonClass}
      >
        Create account
      </SubmitButton>
    </form>
  );
};

export default CreateAccountForm;