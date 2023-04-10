import classes from './styles/Welcome.module.css';

const Welcome = () => {
    return (
    <div className={classes.welcome}>
        <section className={classes['welcome__header']}>
            <h1>Olá! Do you want to speak Portuguese but got only 10 minutes per day?</h1>
            <h3>Don't worry, with us it's enough!</h3>
        </section>
    </div>
    );
};

export default Welcome;