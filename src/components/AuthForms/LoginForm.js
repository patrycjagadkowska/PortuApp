import { useRef } from 'react';

import classes from './AuthForm.module.css';

const LoginForm = () => {
    const email = useRef();
    const password = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
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