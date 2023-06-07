import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { BsPerson } from 'react-icons/bs';
import { BiError } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';

import { auth } from '../../api/auth-api';
import AuthContext from '../../context/AuthContext';
import { useInput } from '../../hooks/useInput';
import AuthInput from './AuthInput';

import classes from './styles/AuthForm.module.css';

const LoginForm = () => {
    const email = useInput("");
    const password = useInput("");
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [ emailError, setEmailError ] = useState();
    const [ passwordError, setPasswordError ] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        setEmailError();
        setPasswordError();

        const removeSpin = ()=> {
          event.target.classList.remove(classes.spin);
        };
        const addErrorClass = () => {
          event.target.classList.add(classes.error);
        };

        event.target.classList.remove(classes.success);
        event.target.classList.remove(classes.error);
        event.target.classList.add(classes.spin);

        if (email.value.length === 0) {
          removeSpin();
          addErrorClass();
          setEmailError("Please enter your email.");
          return;
        } else if (password.value.length === 0) {
          removeSpin();
          addErrorClass();
          setEmailError("Please enter your password.");
          return;
        }

        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              event.target.classList.remove(classes.spin);
              event.target.classList.add(classes.success);
                const user = userCredential.user;
                authCtx.login(user.uid);
                navigate('/learn');
            }).catch((error) => {
              event.target.classList.remove(classes.spin);
              event.target.classList.add(classes.error);
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
      <form className={classes.form}>
        <AuthInput
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
        <AuthInput
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
        <button onClick={submitHandler} className={classes["form__submit-btn"]}>
          login
        </button>
      </form>
    );
};

export default LoginForm;