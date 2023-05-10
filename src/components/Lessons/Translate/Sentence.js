import classes from './styles/Sentence.module.css';

const Sentence = props => {
    const  { translate, translated, id } = props;

    return (
        <li className={classes.sentence}>
            <label htmlFor={id}>{translate}</label>
            <textarea id={id} name={id} />
        </li>
    );
};

export default Sentence;