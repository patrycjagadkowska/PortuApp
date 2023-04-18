import { useRef, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';

import { auth } from '../../api/auth-api';
import AuthContext from '../../context/AuthContext';

import classes from './AuthForm.module.css';

const LoginForm = () => {
    const email = useRef();
    const password = useRef();
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                authCtx.login(user.uid);
                navigate('/learn');
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
        <button className={classes["form__submit-btn"]}>Login</button>
      </form>
    );
};

export default LoginForm;