import { useContext } from 'react';

import Lessons from './Lessons';
import Test from './Test';
import ProgressBar from './ProgressBar';
import DataContext from '../../context/DataContext';

import classes from './styles/Unit.module.css';

const Unit = (props) => {
    const dataCtx = useContext(DataContext);
    const { unitId } = props;
    

    const unitData = dataCtx.getUnit(unitId);
    console.log(unitData);
    const { title, lessons, test } = unitData;
    return (
        <div className={classes.panel}>
            <h3>{title}</h3>
            <Lessons lessons={lessons} unitId={unitId} />
            <Test test={test} unitId={unitId} />
            <ProgressBar />
        </div>
    );
};

export default Unit;