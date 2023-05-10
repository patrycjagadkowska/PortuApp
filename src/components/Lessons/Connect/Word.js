import classes from './styles/Word.module.css';

const Word = props => {
    const { word, id } = props.word;
    const { checkAnswer } = props;

    const handleClick = () => {
        checkAnswer(id);
    };

    return (
        <li className={classes.word} onClick={handleClick}>
            {word}
        </li>
    );
};

export default Word;