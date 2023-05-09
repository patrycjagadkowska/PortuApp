import classes from './styles/Sentence.module.css';

const Sentence = (props) => {
    const { sentence, correct } = props;

    return (
        <li className={classes.sentence}>
            {sentence}
        </li>
    );
};

export default Sentence