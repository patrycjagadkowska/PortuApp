import ButtonNavLink from '../components/UI/ButtonNavLink';

import classes from './styles/ErrorPage.module.css';

const ErrorPage = () => {
    return (
      <section className={classes["error-page"]}>
        <h1>We're sorry. This page doesn't exist.</h1>
        <p>
          Please verify the URL or contact us{" "}
          <a
            href="mailto:patrycjagadkowska@gmail.com"
            className={classes["error-page__mail"]}
          >
            by email
          </a>
        </p>
        <p>
          or simply <ButtonNavLink to="/">go to the main page</ButtonNavLink>.
        </p>
      </section>
    );
};

export default ErrorPage;