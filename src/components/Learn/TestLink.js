import { Link } from "react-router-dom";
import { useContext } from "react";

import UserProgressContext from "../../context/UserProgressContext";

import classes from "./styles/TestLink.module.css";

const TestLink = ({ unitId }) => {
  const { progressData } = useContext(UserProgressContext);
  const linkTextNode = progressData && progressData.hasOwnProperty(unitId) && progressData[unitId].test ? "completed!" : "start";

  return (
    <div className={classes.test}>
      <span>Final Test</span>
      <Link to={`/learn/${unitId}/test`}>{linkTextNode}</Link>
    </div>
  );
};

export default TestLink;