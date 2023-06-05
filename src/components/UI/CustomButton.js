import classes from './styles/CustomButton.module.css';

const CustomButton = (props) => {
    return (
        <button onClick={props.onClick} className={`${classes.button} ${props.className ? props.className : ""}`}>
            {props.children}
        </button>
    );
};

export default CustomButton;