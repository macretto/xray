import React from "react";
import styles from "./ExamsList.module.css";
import { Link } from "react-router-dom";

const ExamsList = ({ items }) => {
  return (
    <div className={styles.exams}>
      <h1>Exams</h1>

      <ul className={styles.list}>
        {items.map((exam) => (
          <li key={exam._id} className={styles.item}>
            <Link to={`/exams/${exam._id}`}>
        
              <div className={styles.content}>
              <img src={exam.imageURL} alt={exam.imageURL} />
                <div className={styles.titles} style={{width:'3rem'}}>
                  <h4>Patient: </h4>
                  <p>{exam.patientName}</p>
                </div>

                <div className={styles.titles}>
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
                <div className={styles.titles}>
                  <h4>ZipCode</h4>
                  <p>{exam.zipCode}</p>
                </div>
                <div className={styles.titles} style={{width:'10rem'}}>
                  <h4>Findings</h4>
                  <p>{exam.keyFindings.slice(0,60)}</p>
                  <span style={{color:'blue', boxShadow:'none'}} > see more..</span>
                </div>
                <div className={styles.titles}>
                  <h4>BrixiaScores</h4>
                  <p>{exam.age}</p>
                </div>

                <div className={styles.titles}>
                  <h4>created</h4>
                  <time>02/28/2024</time>
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
