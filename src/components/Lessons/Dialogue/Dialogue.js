import { useParams } from 'react-router';
import { Fragment } from 'react';

import Conversation from './Conversation';
import DialogueExercise from './DialogueExercise';
import { useDoneExercise } from '../../../hooks/useDoneExercise';

import classes from './styles/Dialogue.module.css';

const Dialogue = (props) => {
    const { data } = props;
    const { unitId, lessonId } = useParams();
    const{ updateDoneExercises } = useDoneExercise(data.length, unitId, lessonId);
    
    const dialogueContent = data.map((dialoguePart, index) => {
        return (<Fragment key={`${unitId}/${lessonId}/${index}`}><Conversation conversation={dialoguePart.conversation} meaning={dialoguePart.meaning} />
        <DialogueExercise animationDelay={dialoguePart.conversation.length * 2} exercise={dialoguePart.exercise} onCorrect={updateDoneExercises} /></Fragment>)
    });

    return (
        <div className={classes.dialogue}>
            {dialogueContent}
        </div>
    );
};

export default Dialogue;