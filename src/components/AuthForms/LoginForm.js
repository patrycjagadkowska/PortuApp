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
        event.target.classList.remove(classes.success);
        event.target.classList.remove(classes.error);
        event.target.classList.add(classes.spin);

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              event.target.classList.remove(classes.spin);
              event.target.classList.add(classes.success);
                const user = userCredential.user;
                authCtx.login(user.uid);
                navigate('/learn');
            }).catch((err) => {
              event.target.classList.remove(classes.spin);
              event.target.classList.add(classes.error);
                console.log(err);
            });
    };
    
    return (
      <form className={classes.form}>
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
        <button onClick={submitHandler} className={classes["form__submit-btn"]}>login</button>
      </form>
    );
};

export default LoginForm;