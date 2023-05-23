import { useParams } from 'react-router';
import { Fragment, useState } from 'react';

import Conversation from './Conversation';
import DialogueExercise from './DialogueExercise';
import { useDoneExercise } from '../../../hooks/useDoneExercise';
import GoodAnswerModal from '../GoodAnswerModal';
import WrongAnswerModal from '../WrongAnswerModal';

import classes from './styles/Dialogue.module.css';

const Dialogue = (props) => {
    const { data } = props;
    const { unitId, lessonId } = useParams();
    const{ updateDoneExercises } = useDoneExercise(data.length, unitId, lessonId);
    const [ openGoodModal, setOpenGoodModal ] = useState(false);
    const [ openWrongModal, setOpenWrongModal ] = useState(false);

    const handleToggleModal = (modal, bool) => {
        if (modal === "good") {
            setOpenGoodModal(bool);
        }
        if (modal === "wrong") {
            setOpenWrongModal(bool);
        }
    };
    
    const dialogueContent = data.map((dialoguePart, index) => {
        return (
          <Fragment key={`${unitId}/${lessonId}/${index}`}>
            <Conversation
              conversation={dialoguePart.conversation}
              meaning={dialoguePart.meaning}
            />
            <DialogueExercise
              animationDelay={dialoguePart.conversation.length * 2}
              exercise={dialoguePart.exercise}
              onCorrect={updateDoneExercises}
              toggleModal={handleToggleModal}
            />
          </Fragment>
        );
    });

    return (
        <div className={classes.dialogue}>
            {dialogueContent}
            {openGoodModal && <GoodAnswerModal toggleModal={handleToggleModal} openModal={openGoodModal} />}
            {openWrongModal && <WrongAnswerModal toggleModal={handleToggleModal} openModal={openWrongModal} />}
        </div>
    );
};

export default Dialogue;