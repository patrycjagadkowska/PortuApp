import Card from "../UI/Card";

import classes from "./styles/StatsItem.module.css";

const StatsItem = ({ alt, img, children }) => {
  return (
    <Card className={classes["stats-item"]} img={img} alt={alt}>
      {children}
    </Card>
  );
};

export default StatsItem;