import SentencesList from './SentencesList';

import classes from './styles/Translate.module.css';

const Translate = props => {
    const { title, sentences } = props.data;

    return (
        <div className={classes.translate}>
            <h3>{title}</h3>
            <SentencesList sentences={sentences} />
        </div>
    );
};

export default Translate