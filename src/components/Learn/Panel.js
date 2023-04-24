import Unit from './Unit';
import Test from './Test';
import ProgressBar from './ProgressBar';

import classes from './styles/Panel.module.css';

const Panel = () => {
    return (
        <div className={classes.panel}>
            <h3>Unit 1</h3>
            <Unit />
            <Test />
            <ProgressBar />
        </div>
    );
};

export default Panel;