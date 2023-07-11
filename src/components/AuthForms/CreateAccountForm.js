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
        switch (error.code) {
          case ("auth/invalid-email"):
            setEmailError("Please enter a valid email.");
            break;
          case ("auth/email-already-in-use" || "auth/email-already-exists"):
            setRepeatedPassError("This email is already registered");
            break;
          case ("auth/network-request-failed"):
            setRepeatedPassError("Network error occured");
            break;
          case ("auth/too-many-requests"):
            setRepeatedPassError(
              "We're sorry, we got too many requests. Please try again later."
            );
            break;
          case ("auth/internal-error"):
            setRepeatedPassError("Internal error occured. Please try again later.");
            break;
          case ("auth/invalid-password"):
            setRepeatedPassError("Invalid password. Must contain at least 6 characters.");
            break;
          default: 
          setRepeatedPassError(error.message);
          break;
        }
      });
  };

  return (
    <form className={classes.form} autoComplete="on" name="create-account-form">
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