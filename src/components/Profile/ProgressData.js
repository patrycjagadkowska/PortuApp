import UnitProgress from './UnitProgress';

import classes from './styles/ProgressData.module.css';

const ProgressData = () => {
    return(
        <section className={classes.progressData}>
            <ul>
          <UnitProgress unitId="01" />
          <UnitProgress unitId="02" />
        </ul>
        </section>
    );
};

export default ProgressData;