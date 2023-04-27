import { Link } from 'react-router-dom';

import classes from './styles/Test.module.css';

const Test = (props) => {
    return (
        <div className={classes.test}>
            <span>Final Test</span>
            <Link to='/'>start</Link>
        </div>
    );
};

export default Test;