import { useParams } from "react-router";

import Sentence from "./Sentence";
import { useDoneExercise } from '../../../hooks/useDoneExercise';

import classes from './styles/SentencesList.module.css';

const SentencesList = props => {
    const { sentences } = props;
    const { unitId, lessonId } = useParams();
    const updateDoneExercise = useDoneExercise(sentences.length, unitId, lessonId);

    const sentencesList = sentences.map((sentence, index) => {
        const id = `${unitId}/${lessonId}/${index}`;
        return <Sentence onCorrect={updateDoneExercise} translate={sentence.translate} translated={sentence.translated} key={id} id={id} />
    });

    return (
        <ol className={classes["sentences-list"]}>
            {sentencesList}
        </ol>
    );
};

export default SentencesList;