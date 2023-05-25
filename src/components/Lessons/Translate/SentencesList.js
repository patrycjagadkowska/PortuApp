import { useParams } from "react-router";
import { useEffect } from "react";

import Sentence from "./Sentence";
import { useDoneExercise } from '../../../hooks/useDoneExercise';

import classes from './styles/SentencesList.module.css';

const SentencesList = props => {
    const { sentences, toggleModal } = props;
    const { unitId, lessonId } = useParams();
    const NUM_OF_EXERCISES = sentences.length;
    const { updateDoneExercises, numDone } = useDoneExercise(NUM_OF_EXERCISES, unitId, lessonId);

    useEffect(() => {
        if (NUM_OF_EXERCISES === numDone) {
            toggleModal(true);
        }
    }, [toggleModal, NUM_OF_EXERCISES, numDone]);

    const sentencesList = sentences.map((sentence, index) => {
        const id = `${unitId}/${lessonId}/${index}`;
        return <Sentence onCorrect={updateDoneExercises} translate={sentence.translate} translated={sentence.translated} key={id} id={id} />
    });

    return (
        <ul className={classes["sentences-list"]}>
            {sentencesList}
        </ul>
    );
};

export default SentencesList;