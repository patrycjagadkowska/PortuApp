import classes from './styles/AuthInput.module.css';

const AuthInput = ({ label, type, error, id, value, onChange }) => {
    return (
      <div className={classes["auth-input"]}>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} value={value} onChange={onChange} />
        <p className={classes["error-message"]}>{error}</p>
      </div>
    );
};

export default AuthInput;