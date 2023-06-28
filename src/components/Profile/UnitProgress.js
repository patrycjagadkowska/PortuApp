import ProgressBar from "../Learn/ProgressBar";

import classes from "./styles/UnitProgress.module.css";

const UnitProgress = ({ unitId, numOfLessons }) => {
  let id = unitId.substring(1);
  if (id.charAt(0) === "0") {
    id = id.substring(1);
  }

  return (
    <li className={classes["unitProgress"]}>
      <p>Unit {id}</p>
      <ProgressBar numOfLessons={numOfLessons} unitId={unitId} shorter />
    </li>
  );
};

export default UnitProgress;