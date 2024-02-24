import { useState } from "react";
// import {redirect} from  'react-router-dom'
import styles from "./ExamForm.module.css";

const ExamForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [sex, setSex] = useState("");
  const [bmi, setBmi] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [scores, setScores] = useState("");
  const [image, setImage] = useState("");
  const [findings, setFindings] = useState("");


    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch("http://localhost:9000/api/exams", {
       
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name,
              age,
              // sex,
              bmi,
              zipCode,
              scores,
              image,
              findings
            })
          });
      
          if (!response.ok) {
            throw new Error('Failed to submit form');
          }
      
          // Check if the response status is 204
          if (response.status === 204) {
            // Clear form after successful submission
            setName("");
            setAge("");
            // setSex("");
            setBmi("");
            setZipCode("");
            setScores("");
            setImage("");
            setFindings("");
            console.log("GOOD")
          } else {
            // Handle other response statuses if needed
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">Patient Name</label>
        <input id="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}  />
      </p>

   
      <p>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </p>

      <p>
        <label htmlFor="bmi">Bmi </label>
        <input id="bmi" type="number" name="bmi" value={bmi} onChange={(e) => setBmi(e.target.value)}  />
      </p>

      <p>
        <label htmlFor="date">Zip Code </label>
        <input id="zip" type="text" name="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
      </p>

      <p>
        <label htmlFor="scores">BrixiaScores </label>
        <input id="scores" type="number" name="scores" value={scores} onChange={(e) => setScores(e.target.value)} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
      </p>

      <p>
        <label htmlFor="findings">Findings</label>
        <textarea id="findings" name="findings" rows="5" value={findings} onChange={(e) => setFindings(e.target.value)} />
      </p>
      <p>
        <span> Created on 02/23/2024</span>
      </p>

      <div className={styles.actions}>
        <button className={styles.btn} type="submit">CREATE EXAM</button>
      </div>
      <p>-{name}</p>
    </form>
  );
};

export default ExamForm;
