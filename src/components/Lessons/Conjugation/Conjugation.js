import ConjugationExercise from './ConjugationExercise';
import VerbTable from './VerbTable';

import classes from './styles/Conjugation.module.css';

const Conjugation = props => {
    const  { verb, table, exercises, title } = props.data;
    
    return (
        <div className={classes.conjugation}>
            <VerbTable verb={verb} table={table} />
            <ConjugationExercise title={title} exercises={exercises} />
        </div>
    );
};

export default Conjugation;