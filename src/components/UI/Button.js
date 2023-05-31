import classes from './styles/Button.module.css';

const Button = (props) => {
    return (
        <button className={`${classes.button} ${props.className ? props.className : ""}`}>
            {props.children}
        </button>
    );
};

export default Button;