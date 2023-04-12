import classes from './styles/Footer.module.css';

const Footer = () => {
    return (
      <footer className={classes.footer}>
        <div className={classes["footer__copyright"]}>
          <span>
            &copy;Copyright by{" "}
            <a href="https://www.patrycjagadkowska.com">Patrycja Gadkowska</a>{" "}
            2023
          </span>
        </div>
        <div className={classes["footer__links"]}>
            <a href="https://www.linkedin.com">linkedin</a>
            <a href="https://www.github.com">github</a>
            <a href="mailto:patrycjagadkowska@gmail.com">patrycjagadkowska@gmail.com</a>
        </div>
      </footer>
    );
};

export default Footer;