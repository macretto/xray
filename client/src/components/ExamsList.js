import React from "react";
import styles from "./ExamsList.module.css";
import { Link } from "react-router-dom";

const ExamsList = ({ items }) => {
  return (
    <div className={styles.exams}>
      <h1>All Events</h1>

      <ul className={styles.list}>
        {items.map((exam) => (
          <li key={exam._id} className={styles.item}>
            <Link to={`/exams/${exam._id}`}>

              <img src={exam.imageURL} alt={exam.imageURL} />
              <div className={styles.content}>
                <div className={styles.titles}>
                  <h4>Patient: </h4>
                  <p>{exam.patientName}</p>
                </div>

                <div className={styles.titles} >
                  <h4>Age</h4>
                  <p>{exam.age}</p>
                 
                </div>

                <div className={styles.titles}>
                  <h4>Sex</h4>
                  <p>{exam.sex}</p>
                </div>
                <div className={styles.titles}>
                  <h4>Bmi</h4>
                  <p>{exam.bmi}</p>
                </div>
                <div className={styles.titles} >
                  <h4>ZipCode</h4>
                  <p>{exam.zipCode}</p>
                </div>
                <div className={styles.titles} >
                  <h4>Findings</h4>
                  <p >{exam.keyFindings}</p>
                </div>
                <div className={styles.titles}>
                  <h4>BrixiaScores</h4>
                  <p>{exam.age}</p>
                </div>

                <div className={styles.titles}>
                  <h4>created</h4>
                  <time>{exam.age}</time>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExamsList;
