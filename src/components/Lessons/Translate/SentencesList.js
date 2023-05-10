import { useParams } from "react-router";

import Sentence from "./Sentence";

import classes from './styles/SentencesList.module.css';

const SentencesList = props => {
    const { sentences } = props;
    const { unitId, lessonId } = useParams();

    const sentencesList = sentences.map((sentence, index) => {
        const id = `${unitId}/${lessonId}/${index}`;
        return <Sentence translate={sentence.translate} translated={sentence.translated} key={id} id={id} />
    });

    return (
        <ol className={classes["sentences-list"]}>
            {sentencesList}
        </ol>
    );
};

export default SentencesList;