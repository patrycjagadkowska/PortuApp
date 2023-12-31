import { useParams } from "react-router";

import StatementPair from "./StatementPair";

import classes from "./styles/Conversation.module.css";

const Conversation = ({ conversation, meaning }) => {
  const { unitId, lessonId } = useParams();

  if (conversation.length !== meaning.length) {
    throw new Error("Data is not correct");
  }

  const conversationContent = [];

  let float = true;
  for (let i = 0; i < conversation.length; i++) {
    conversationContent.push(
      <StatementPair
        key={`${unitId}/${lessonId}/${i}`}
        float={float}
        portuguese={conversation[i]}
        english={meaning[i]}
        animationDelay={i + i}
      />
    );
    float = !float;
  }
  return <div className={classes.conversation}>{conversationContent}</div>;
};

export default Conversation;
