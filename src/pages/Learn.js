import Panel from '../components/Learn/Panel';

import classes from './styles/Learn.module.css';

const Learn = () => {
    return (
        <div>
            <div className={classes.header}>
                <h1>Choose your lesson</h1>
            </div>
            <div className={classes.panels}>
                <Panel />
                <Panel />
            </div>
        </div>
    );
};

export default Learn;