import classes from "./styles/WelcomeSection.module.css";

const WelcomeSection = ({ className, children, title }) => {
  return (
    <section
      className={`${classes["welcome__section"]} ${className ? className : ""}`}
    >
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default WelcomeSection;