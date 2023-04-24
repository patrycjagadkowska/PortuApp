import classes from './styles/ProgressBar.module.css';

const ProgressBar = () => {
    return (
        <div>
            <span className={classes.bar} />
            <span>0/5</span>
        </div>
    );
};

export default ProgressBar;