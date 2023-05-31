import classes from './styles/WelcomeSection.module.css';

const WelcomeSection = (props) => {
    return (
      <section
        className={`${classes["welcome__section"]} ${
          props.className ? props.className : ""
        }`}
      >
        <h3>{props.title}</h3>
        {props.children}
      </section>
    );
};

export default WelcomeSection;