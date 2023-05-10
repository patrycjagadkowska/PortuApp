import WordsList from './WordsList';

import classes from './styles/Connect.module.css';

const Connect = props => {
    const { pt, eng, title } = props.data;

    return (
        <div className={classes.connect}>
            <h3>{title}</h3>
            <div className={classes["connect__lists"]}>
                <WordsList list={pt} lang="pt" />
                <WordsList list={eng} lang="eng" />
            </div>
        </div>
    );
};

export default Connect;