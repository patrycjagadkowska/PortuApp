import { useParams } from 'react-router';

import classes from './styles/Lesson.module.css';

const Lesson = () => {
    const params = useParams();
    return (
        <div className={classes.lesson}>
            {console.log(params)}
        </div>
    );
};

export default Lesson;