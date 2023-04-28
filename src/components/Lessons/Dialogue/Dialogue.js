import { useParams } from 'react-router';

import Conversation from './Conversation';

import classes from './styles/Dialogue.module.css';

const Dialogue = (props) => {
    const { data } = props;

    const { unitId, lessonId } = useParams();
    
    const dialogueContent = data.map((dialoguePart, index) => {
        return <Conversation conversation={dialoguePart.conversation} meaning={dialoguePart.meaning} key={`${unitId}/${lessonId}/${index}`} />
    });

    return (
        <div className={classes.dialogue}>
            {dialogueContent}
        </div>
    );
};

export default Dialogue;