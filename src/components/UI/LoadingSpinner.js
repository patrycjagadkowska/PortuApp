import classes from './styles/LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className={classes.container}>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
        </div>
    );
};

export default LoadingSpinner;