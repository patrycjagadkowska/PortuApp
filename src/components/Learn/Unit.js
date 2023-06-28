import Lessons from "./Lessons";
import TestLink from "./TestLink";
import ProgressBar from "./ProgressBar";

import classes from "./styles/Unit.module.css";

const Unit = ({ unit }) => {
  const { title, lessons, test, id } = unit;
  return (
    <div className={classes.unit}>
      <h3>{title}</h3>
      <Lessons lessons={lessons} unitId={id} />
      <TestLink test={test} unitId={id} />
      <ProgressBar unitId={id} numOfLessons={lessons.length} />
    </div>
  );
};

export default Unit;