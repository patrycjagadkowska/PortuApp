import image1 from "../assets/welcome-section-image1.jpg";
import image2 from "../assets/welcome-section-image2.jpg";
import image3 from "../assets/welcome-section-image3.jpg";
import image4 from "../assets/welcome-section-image4.jpg";
import Card from "../components/UI/Card";
import WelcomeSection from "../components/Welcome/WelcomeSection";
import ButtonNavLink from "../components/UI/ButtonNavLink";
import StatsItem from "../components/Welcome/StatsItem";

import classes from "./styles/Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <header className={classes["welcome__header"]}>
            <h1>
              Olá! Do you want to speak Portuguese but got only 10 minutes per
              day?
            </h1>
            <h2>Don't worry, with us it's enough!</h2>
          <ButtonNavLink to="/createAccount" className={classes["welcome__cta-btn"]}>
            Start learning
          </ButtonNavLink>
        </header>
      <WelcomeSection title="Why you should learn with us?">
        <Card
          className={classes["welcome__section--info"]}
          img={image1}
          alt="Student with tablet"
        >
          <p>
            We know that learning language from a book is not effective. That's
            why we made our <strong>course interactive</strong>, including
            quizes and you can get <strong>feedback of your knowledge</strong>{" "}
            in seconds!
          </p>
        </Card>
        <Card
          className={classes["welcome__section--info"]}
          img={image2}
          alt="People with electronic devices"
        >
          <p>
            Are you going by bus and got nothing to do? It's perfect time for a{" "}
            <strong>short lesson</strong> or <strong>quiz</strong>! With us you
            can <strong>learn from any place</strong> you want!
          </p>
        </Card>
        <Card
          className={classes["welcome__section--info"]}
          img={image3}
          alt="Man with a smartphone"
        >
          <p>
            Short break at work? You can spend it on{" "}
            <strong>learning Portuguese</strong>! Small steps are much better
            than exhausting run so don't worry if you have{" "}
            <strong>only 10 minutes</strong> - after a very few days you will
            notice how much you can learn in only little bit of time!
          </p>
        </Card>
        <Card
          className={classes["welcome__section--info"]}
          img={image4}
          alt="A woman and a man with smartphone"
        >
          <p>
            We are also preparing something new for our users - shortly we are
            going to create a <strong>learning community</strong> so you can
            compare your achievements with your friends to{" "}
            <strong>motivate yourself</strong> more! Join us now to have an
            opportunity to test this option for test before other users.
          </p>
        </Card>
      </WelcomeSection>
      <WelcomeSection
        className={classes["welcome__stats"]}
        title="PortuApp in nubmers"
      >
        <div className={classes["stats-wrapper"]}>
          <StatsItem
            img="https://easyvectors.com/media/XL/0707/community-team-teamwork-people-1404.svg"
            alt="People in the circle"
          >
            <span>
              More than <b>100 000 students</b> all over the world
            </span>
          </StatsItem>
          <StatsItem
            img="https://easyvectors.com/media/XL/2108/laptop-notebook-computer-black-1723.svg"
            alt="Laptop"
          >
            <span>
              Over <b>500 lessons</b>
            </span>
          </StatsItem>
          <StatsItem
            alt="Target"
            img="https://cdn-icons-png.flaticon.com/512/118/118102.png?w=740&t=st=1681278198~exp=1681278798~hmac=ae5c01c4dcd8677ea3c599ad3632b872845868a3c7e13daa6079ea28243fd122"
          >
            <span>
              <b>1 easy way</b> to achieve your <b>learning goal</b>
            </span>
          </StatsItem>
        </div>
        <a
          className={classes.copyright}
          href="https://www.freepik.com/free-vector/illustration-business-target-icon_2606564.htm#query=target%20icon&position=6&from_view=keyword&track=ais"
        >
          Target image by rawpixel.com on Freepik
        </a>
      </WelcomeSection>
      <WelcomeSection title="Don't think more, just join us!">
        <ButtonNavLink to="/" className={`${classes["welcome__cta-btn"]} ${classes["welcome__red-link"]}`}>
          Join PortuApp
        </ButtonNavLink>
      </WelcomeSection>
    </div>
  );
};

export default Welcome;
