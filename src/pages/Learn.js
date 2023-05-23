import { useContext } from 'react';

import Panel from '../components/Learn/Panel';
import DataContext from '../context/DataContext';

import classes from './styles/Learn.module.css';

const Learn = () => {
    const dataCtx = useContext(DataContext);
    return (
        <div className={classes.learn}>
            <div className={classes.header}>
                <h1>Choose your lesson</h1>
            </div>
            <div className={classes.panels}>
               {dataCtx.data.length > 0 && <Panel />}
               {dataCtx.data.length <= 0 && <h3>Something went wrong</h3>}
            </div>
        </div>
    );
};

export default Learn;