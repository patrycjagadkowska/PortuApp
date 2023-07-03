import classes from "./styles/CustomInput.module.css";

const CustomInput = ({ label, type, error, id, value, onChange, onFocus, autoComplete }) => {
  return (
    <div className={classes["auth-input"]}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        autoComplete={autoComplete ? autoComplete : "off"}
      />
      <p className={classes["error-message"]}>{error}</p>
    </div>
  );
};

export default CustomInput;