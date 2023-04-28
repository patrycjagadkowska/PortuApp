import classes from './styles/Statement.module.css';

const Statement = props => {
    const { lang } = props;
    return (
        <div className={`${classes.statement} ${classes[lang]}`}>
            {props.children}
        </div>
    );
};

export default Statement;