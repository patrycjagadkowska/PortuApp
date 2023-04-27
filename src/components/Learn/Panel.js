import { useContext } from 'react';

import DataContext from '../../context/DataContext';

import classes from './styles/Panel.module.css';
import Unit from './Unit';

const Panel  = () => {
    const dataCtx = useContext(DataContext);
    const content = dataCtx.data.map(unit => {
        return <Unit key={unit.id} unitId={unit.id} />
    });
    return (
        <div className={classes.panel}>
            {content}
        </div>
    );
};

export default Panel;