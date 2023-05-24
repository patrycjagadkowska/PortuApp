import classes from './styles/UnitProgress.module.css';

const UnitProgress = (props) => {
    return (
        <li className={classes["unitProgress"]}>
            <p>Unit {props.unitId}</p>
            <p>Here will be progressBar</p>
        </li>
    );
};

export default UnitProgress;