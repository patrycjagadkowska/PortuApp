import Unit from "./Unit";

import classes from "./styles/Panel.module.css";

const Panel = ({ data }) => {
  const content = data.map((unit) => {
    return <Unit key={unit.id} unit={unit} />;
  });

  return <div className={classes.panel}>{content}</div>;
};

export default Panel;