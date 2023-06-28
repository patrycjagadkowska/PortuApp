import classes from "./styles/SubmitButton.module.css";

const SubmitButton = ({ onClick, setClass, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.submitBtn} ${setClass ? classes[setClass] : ""} ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};

export default SubmitButton;