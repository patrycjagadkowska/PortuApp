import { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../api/auth-api';

import classes from './AuthForm.module.css';

const CreateAccountForm = () => {
    const email = useRef();
    const password = useRef();
    const repeatedPassword = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const repeatedPasswordValue = repeatedPassword.current.value;

        if (emailValue.length === 0) {
            alert("Please enter your email");
            return;
        } else if (passwordValue.length === 0) {
            alert("Please enter your password");
            return;
        } else if (repeatedPasswordValue.length === 0) {
            alert("Please repeat your password");
            return;
        } else if (passwordValue !== repeatedPasswordValue) {
            alert("Passwords are not equal")
            return;
        }

        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch(err => {
                console.log(err);
            });
    };

    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label className={classes["form__label"]} htmlFor="email">
          Email
        </label>
        <input
          className={classes["form__input"]}
          type="email"
          id="email"
          ref={email}
        />
        <label className={classes["form__label"]} htmlFor="password">
          Password
        </label>
        <input
          className={classes["form__input"]}
          type="password"
          id="password"
          ref={password}
        />
        <label className={classes["form__label"]} htmlFor="repeat-password">
          Repeat password
        </label>
        <input
          className={classes["form__input"]}
          type="password"
          id="repeat-password"
          ref={repeatedPassword}
        />
        <button className={classes["form__submit-btn"]}>Create account</button>
      </form>
    );
};

export default CreateAccountForm;