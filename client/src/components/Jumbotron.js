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
          <p className={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            luctus eros ut ligula congue, id dignissim nunc tempor. Nullam
            efficitur tellus vel justo rutrum, eget dignissim magna dapibus.
            Donec quis quam non velit feugiat viverra. Integer ut justo tellus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
