import classes from "./styles/Statement.module.css";

const Statement = ({ lang, children }) => {
  return (
    <div className={`${classes.statement} ${classes[lang]}`}>
      {children}
    </div>
  );
};

export default Statement;
