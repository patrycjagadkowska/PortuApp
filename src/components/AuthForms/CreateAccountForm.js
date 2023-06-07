import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { BsPerson } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiError } from 'react-icons/bi';
import { useNavigate } from 'react-router';

import { auth } from '../../api/auth-api';
import AuthInput from './AuthInput';
import { useInput } from '../../hooks/useInput';

import classes from './styles/AuthForm.module.css';

const CreateAccountForm = () => {
    const email = useInput("");
    const password = useInput("");
    const repeatedPassword = useInput("");
    const [ emailError, setEmailError ] = useState();
    const [ passError, setPassError ] = useState();
    const [ repeatedPassError, setRepeatedPassError ] = useState();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();

        setEmailError();
        setPassError();
        setRepeatedPassError();

        const removeSpin = () => {
          event.target.classList.remove(classes.spin)
        };

        const addErrorClass = () => {
          event.target.classList.add(classes.error);
        };

        event.target.classList.remove(classes.error);
        event.target.classList.remove(classes.success);
        event.target.classList.add(classes.spin);


        if (email.value.length === 0) {
            removeSpin();
            addErrorClass();
            setEmailError("Please enter your email");
            return;
        } else if (password.value.length === 0) {
            removeSpin();
            addErrorClass();
            setPassError("Please enter you password");
            return;
        } else if (repeatedPassword.value.length === 0) {
          removeSpin();
          addErrorClass();
          setRepeatedPassError("Please repeat your password");
            return;
        } else if (password.value !== repeatedPassword.value) {
          removeSpin();
          addErrorClass();
          setRepeatedPassError("Passwords are not equal");
            return;
        }

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              removeSpin();
              event.target.classList.add(classes.success);
              setTimeout(() => {
                navigate("/login");
              }, 1000);
            }).catch(error => {
              removeSpin();
              event.target.classList.add(classes.error);
              if (error.code === "auth/email-already-in-use") {
                setRepeatedPassError("This email is already registered");
              } else if (error.code === "auth/network-request-failed") {
                setRepeatedPassError("Network error occured");
              } else if (error.code === "auth/too-many-requests") {
                setRepeatedPassError("We're sorry, we got too many requests. Please try again later.");
              } else {
                setRepeatedPassError(error.message);
              }
            });
    };

    return (
      <form className={classes.form}>
        <AuthInput
          value={email.value}
          onChange={email.onChange}
          label={
            <>
              <BsPerson /> Email
            </>
          }
          type="email"
          id="email"
          error={emailError &&
            <>
              <BiError /> {emailError}
            </>
          }
        />
        <AuthInput
          value={password.value}
          onChange={password.onChange}
          label={
            <>
              <RiLockPasswordLine /> Password
            </>
          }
          type="password"
          id="password"
          error={passError &&
            <>
              <BiError /> {passError}
            </>
          }
        />
        <AuthInput
          value={repeatedPassword.value}
          onChange={repeatedPassword.onChange}
          label={
            <>
              <RiLockPasswordLine /> Repeat password
            </>
          }
          type="password"
          id="repeated-password"
          error={repeatedPassError && 
            <>
              <BiError /> {repeatedPassError}
            </>
          }
        />
        <button onClick={submitHandler} className={`${classes["form__submit-btn"]} ${classes["create-account-button"]}`}>
          Create account
        </button>
      </form>
    );
};

export default CreateAccountForm;