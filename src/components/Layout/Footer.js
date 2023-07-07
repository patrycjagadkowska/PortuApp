import classes from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__copyright"]}>
        <span>
          &copy;Copyright{" "}
          <a
            href="https://patrycjagadkowska.netlify.app/"
            data-replace="Patrycja Gadkowska"
          >
            <span>Patrycja Gadkowska</span>
          </a>{" "}
          2023
        </span>
      </div>
      <div className={classes["footer__links"]}>
        <a href="https://www.linkedin.com/in/patrycja-gadkowska-600b34154/" data-replace="linkedin">
          linkedin
        </a>
        <a href="https://github.com/patrycjagadkowska" data-replace="github">
          github
        </a>
        <a
          href="mailto:patrycjagadkowska@gmail.com"
          data-replace="patrycjagadkowska@gmail.com"
        >
          patrycjagadkowska@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;