import { useContext } from 'react';

import UnitProgress from './UnitProgress';
import DataContext from '../../context/DataContext';

import classes from './styles/ProgressData.module.css';

const ProgressData = () => {
    const { data } = useContext(DataContext);

    const units = data.map((unit) => {
        return <UnitProgress unitId={unit.id} numOfLessons={unit.lessons.length} key={unit.id} />
    });

    return(
        <section className={classes.progressData}>
            <ul>
          {units && units}
        </ul>
        </section>
    );
};

export default ProgressData;