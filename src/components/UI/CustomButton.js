import classes from "./styles/CustomButton.module.css";

const CustomButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;