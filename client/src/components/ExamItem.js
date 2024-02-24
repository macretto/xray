import {Link} from 'react-router-dom'
import styles from './examItem.module.css'


const ExamItem = ({ item }) => {
  return (
    
    <li
    
    >

<div className={styles.wrapper}>
  <div className={styles.image}>
  <img

        src={item.imageURL}
        alt="xray"
  
      />
  </div>

      <span>ID: {item._id}</span>
      <span>PatientID: {item.patientId}</span>
      <div>{item.examId}</div>
      <div>{item.patientName}</div>
      <div>Age: {item.age}</div>
      <div>Sex: {item.sex}</div>
      <div>Bmi: {item.bmi}</div>
      <div>Zip Code: {item.zipCode}</div>
      <div align="right"></div>
      <div>Findings:{item.keyFindings}</div>

      <div>Scores: {item.brixiaScores}</div>
      {item.createdAt ? <div>CreatedAt: {item.createdAt}</div> : ""}
      </div>
      
    </li>
    
  );
};

export default ExamItem;
