import Unit from './Unit';
import Test from './Test';
import ProgressBar from './ProgressBar';

import classes from './styles/Panel.module.css';

const Panel = (props) => {
    const unit = props.unit.data();
    const { title, test, lessons, id } = unit;
    return (
        <div className={classes.panel}>
            <h3>{title}</h3>
            <Unit lessons={lessons} unitId={id} />
            <Test test={test} unitId={id} />
            <ProgressBar />
        </div>
    );
};

export default Panel;