import classes from './AuthForm.module.css';

const CreateAccountForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label className={classes["form__label"]} htmlFor="email">
          Email
        </label>
        <input className={classes["form__input"]} type="email" id="email" />
        <label className={classes["form__label"]} htmlFor="password">
          Password
        </label>
        <input
          className={classes["form__input"]}
          type="password"
          id="password"
        />
        <label className={classes["form__label"]} htmlFor="repeat-password">
          Repeat password
        </label>
        <input
          className={classes["form__input"]}
          type="password"
          id="repeat-password"
        />
        <button className={classes["form__submit-btn"]}>Submit</button>
      </form>
    );
};

export default CreateAccountForm;