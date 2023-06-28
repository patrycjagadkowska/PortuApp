import classes from "./styles/LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  return (
    <div
      className={`${classes.container} ${
        props.className ? props.className : ""
      }`}
    >
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
    </div>
  );
};

export default LoadingSpinner;