import Statement from "./Statement";

import classes from "./styles/StatementPair.module.css";

const StatementPair = ({ portuguese, english, float, animationDelay }) => {
  return (
    <div
      className={`${classes.pair} ${classes[float ? "left" : "right"]}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Statement lang="pt">{portuguese}</Statement>
      <Statement lang="eng">{english}</Statement>
    </div>
  );
};

export default StatementPair;
