import { useContext } from 'react';

import UserProgressContext from '../../context/UserProgressContext';

import classes from './styles/ProgressBar.module.css';

const ProgressBar = (props) => {
    const { numOfLessons, unitId } = props;
    const userCtx = useContext(UserProgressContext);
    const unitProgressData = userCtx.progressData[unitId];
   
    let totalProgress = 0;
    if (unitProgressData) {
        Object.entries(unitProgressData).forEach(([key, value]) => {
            if (value.value === true) {
                totalProgress++;
            }
        });
    }

    const barWidth = totalProgress / numOfLessons * 100;

    return (
        <div className={classes['progress-bar']}>
            <div className={classes['bar-container']}>
            <div className={classes.bar} style={{width: `${barWidth}%`}}/>
            </div>
            <span className={classes['bar-badge']}>{totalProgress}/{numOfLessons}</span>
        </div>
    );
};

export default ProgressBar;