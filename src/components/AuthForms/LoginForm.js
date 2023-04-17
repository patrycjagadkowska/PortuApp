import { useRef, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../api/auth-api';
import AuthContext from '../../context/AuthContext';

import classes from './AuthForm.module.css';

const LoginForm = () => {
    const email = useRef();
    const password = useRef();
    const authCtx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                authCtx.login(user.uid);
            }).catch((err) => {
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
        <button className={classes["form__submit-btn"]}>Submit</button>
      </form>
    );
};

export default LoginForm;