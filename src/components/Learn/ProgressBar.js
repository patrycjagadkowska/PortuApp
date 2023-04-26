import classes from './styles/ProgressBar.module.css';

const ProgressBar = () => {
    return (
        <div className={classes['progress-bar']}>
            <div className={classes['bar-container']}>
            <div className={classes.bar} />
            </div>
            <span className={classes['bar-badge']}>2/5</span>
        </div>
    );
};

export default ProgressBar;