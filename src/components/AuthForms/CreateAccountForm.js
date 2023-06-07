import { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { BsPerson } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';

import { auth } from '../../api/auth-api';

import classes from './AuthForm.module.css';

const CreateAccountForm = () => {
    const email = useRef();
    const password = useRef();
    const repeatedPassword = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const removeSpin = () => {
          event.target.classList.remove(classes.spin)
        };

        const addErrorClass = () => {
          event.target.classList.add(classes.error);
        };

        event.target.classList.remove(classes.error);
        event.target.classList.remove(classes.success);
        event.target.classList.add(classes.spin);

        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const repeatedPasswordValue = repeatedPassword.current.value;

        if (emailValue.length === 0) {
            removeSpin();
            addErrorClass();
            console.log("Please enter your email");
            return;
        } else if (passwordValue.length === 0) {
            removeSpin();
            addErrorClass();
            console.log("Please enter you password");
            return;
        } else if (repeatedPasswordValue.length === 0) {
          removeSpin();
          addErrorClass();
          console.log("Please repeat your password");
            return;
        } else if (passwordValue !== repeatedPasswordValue) {
          removeSpin();
          addErrorClass();
          console.log("Passwords are not equal");
            return;
        }

        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
              removeSpin();
              event.target.classList.add(classes.success);
                console.log(userCredential);
            }).catch(err => {
              removeSpin();
              event.target.classList.add(classes.success);
                console.log(err);
            });
    };

    return (
      <form className={classes.form}>
        <label className={classes["form__label"]} htmlFor="email">
         <BsPerson /> Email
        </label>
        <input
          className={classes["form__input"]}
          type="email"
          id="email"
          ref={email}
        />
        <label className={classes["form__label"]} htmlFor="password">
         <RiLockPasswordLine /> Password
        </label>
        <input
          className={classes["form__input"]}
          type="password"
          id="password"
          ref={password}
        />
        <label className={classes["form__label"]} htmlFor="repeat-password">
        <RiLockPasswordLine />  Repeat password
        </label>
        <input
          className={classes["form__input"]}
          type="password"
          id="repeat-password"
          ref={repeatedPassword}
        />
        <button onClick={submitHandler} className={classes["form__submit-btn"]}>Create account</button>
      </form>
    );
};

export default CreateAccountForm;