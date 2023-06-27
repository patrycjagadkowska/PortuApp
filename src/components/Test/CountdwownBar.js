import classes from './styles/CountdownBar.module.css';

const CountdownBar = ({ remainingTime }) => {
    const barWidth = remainingTime / 10;

    return (
        <div className={classes["bar__outer"]}>
            <div className={classes["bar__inner"]} style={{width: `${barWidth}%`}}>
            </div>
        </div>
    );
};

export default CountdownBar;