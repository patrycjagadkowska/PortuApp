import { NavLink } from 'react-router-dom';

import image1 from '../assets/welcome-section-image1.jpg';
import image2 from '../assets/welcome-section-image2.jpg';
import image3 from '../assets/welcome-section-image3.jpg';
import image4 from '../assets/welcome-section-image4.jpg';
import Card from '../components/UI/Card';

import classes from './styles/Welcome.module.css';

const Welcome = () => {
    return (
      <div className={classes.welcome}>
        <section className={classes["welcome__header"]}>
          <div>
            <h1>
              Olá! Do you want to speak Portuguese but got only 10 minutes per
              day?
            </h1>
            <h3>Don't worry, with us it's enough!</h3>
          </div>
          <NavLink to="/" className={classes["welcome__cta-btn"]}>
            Start learning
          </NavLink>
        </section>
        <section className={classes["welcome__section"]}>
          <h2>Why you should learn with us?</h2>
          <Card
            className={classes["welcome__section--info"]}
            img={image1}
            alt="Student with tablet"
          >
            <p>
              We know that learning language from a book is not effective.
              That's why we made our course interactive, including quizes and
              you can get feedback of your knowledge in seconds!
            </p>
          </Card>
          <Card
            className={classes["welcome__section--info"]}
            img={image2}
            alt="People with electronic devices"
          >
            <p>
              Are you going by bus and got nothing to do? It's perfect time for
              a short lesson or quiz! With us you can learn from any place you
              want!
            </p>
          </Card>
          <Card
            className={classes["welcome__section--info"]}
            img={image3}
            alt="Man with a smartphone"
          >
            <p>
              Short break at work? You can spend it on learning Portuguese!
              Small steps are much better than exhausting run so don't worry if
              you have only 10 minutes - after a very few days you will notice
              how much you can learn in only little bit of time!
            </p>
          </Card>
          <Card
            className={classes["welcome__section--info"]}
            img={image4}
            alt="A woman and a man with smartphone"
          >
            <p>
              We are also preparing something new for our users - shortly we are
              going to create a learning community so you can compare your
              achievements with your friends to motivate yourself more! Join us
              now to have an opportunity to test this option for test before
              other users.
            </p>
          </Card>
        </section>
        <section className={classes["welcome__section"]}>
          <h3>Don't think more, just join us!</h3>
          <NavLink to="/" className={classes["welcome__cta-btn"]}>
            Join PortuApp
          </NavLink>
        </section>
        <section
          className={`${classes["welcome__section"]} ${classes["welcome__stats"]}`}
        >
          <h3>PortuApp in nubmers</h3>
          <div className={classes["stats-wrapper"]}>
            <Card
              className={classes["stats-wrapper__item"]}
              img="https://easyvectors.com/media/XL/0707/community-team-teamwork-people-1404.svg"
              alt="People in the circle"
            >
              <span>
                More than <b>100 000 students</b> all over the world
              </span>
            </Card>
            <Card
              className={classes["stats-wrapper__item"]}
              img="https://easyvectors.com/media/XL/2108/laptop-notebook-computer-black-1723.svg"
              alt="Laptop"
            >
              <span>
                Over <b>500 lessons</b>
              </span>
            </Card>
            <Card
              className={classes["stats-wrapper__item"]}
              alt="Target"
              img="https://cdn-icons-png.flaticon.com/512/118/118102.png?w=740&t=st=1681278198~exp=1681278798~hmac=ae5c01c4dcd8677ea3c599ad3632b872845868a3c7e13daa6079ea28243fd122"
            >
              <span>
                <b>1 easy way</b> to achieve your <b>learning goal</b>
              </span>
            </Card>
          </div>
          <a
            className={classes.copyright}
            href="https://www.freepik.com/free-vector/illustration-business-target-icon_2606564.htm#query=target%20icon&position=6&from_view=keyword&track=ais"
          >
            Target image by rawpixel.com on Freepik
          </a>
        </section>
      </div>
    );
};

export default Welcome;