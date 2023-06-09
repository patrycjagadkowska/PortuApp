import { Link } from 'react-router-dom';

import classes from './styles/TestLink.module.css';

const TestLink = ({unitId, test}) => {
    return (
        <div className={classes.test}>
            <span>Final Test</span>
            <Link to='/'>start</Link>
        </div>
    );
};

export default TestLink;