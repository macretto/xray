import React from "react";
import styles from "./Jumbotron.module.css"; // Import CSS file for styling

const Jumbotron = () => {
  return (
    <>
      <div className={styles.jumbotron}>
        <div className={styles.container}>
          <h1 className={styles.title}>Surgeon Generals</h1>
          <p className={styles.subtitle}>
            Where technology and medicine coexist to provide you the best treatment.
          </p>
          <pre className={styles.info}>
          DocWave 🌊 isn't just an app; it's a revolutionary wave of support for doctors on the frontline of COVID-19. 
          With the power of CRUD wizardry (Create, Read, Update, Delete), DocWave empowers doctors to seamlessly 
          intake, track, diagnose, and record every ripple in the COVID-19 journey.<br/><br/>

          A dynamic webapp born from the collaboration of Hack.Diversity and the Surgeon General's team! 🚀
          </pre>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
