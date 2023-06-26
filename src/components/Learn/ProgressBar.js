import { useContext, useState } from 'react';

import UserProgressContext from '../../context/UserProgressContext';

import classes from './styles/ProgressBar.module.css';

const ProgressBar = (props) => {
    const { numOfLessons, unitId, shorter } = props;
    const userCtx = useContext(UserProgressContext);
    const unitProgressData = userCtx.progressData && unitId ? userCtx.progressData[unitId] : [];
    const [ barWidth, setBarWidth ] = useState(0);     
   
    let totalProgress = 0;
    if (unitProgressData) {
        Object.entries(unitProgressData).forEach(([key, value]) => {
            if (value.value === true) {
                totalProgress++;
            }
        });
    }

    setTimeout(() => {
        setBarWidth(totalProgress / numOfLessons * 100);
    }, 500);

    return (
        <div className={`${classes['progress-bar']} ${shorter ? classes["progress-bar__shorter"] : ""}`}>
            <div className={classes['bar-container']}>
            <div className={`${classes.bar} ${barWidth === 100 ? classes["bar-full"] : ""}`} style={{width: `${barWidth}%`}}/>
            </div>
            <span className={classes['bar-badge']}>{totalProgress}/{numOfLessons}</span>
        </div>
    );
};

export default ProgressBar;