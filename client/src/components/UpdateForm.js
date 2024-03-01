import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import styles from "./ExamForm.module.css";

const UpdateForm = ({ title, examId, onHandleUpdate}) => {
 const navigateTo = useNavigate()
  const [exam, setExam] = useState({
    patientName: "",
    age: "",
    sex: null,
    bmi: "",
    zipCode: "",
    brixiaScores: [],
    imageURL: "",
    keyFindings: "",
  });
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/exams/${examId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setExam(jsonData);
     
      } catch (error) {
        console.error("ERROR:", error);
      }
    };
  
    fetchData();

  }, [examId]);


  //handler to delete in details page
  const handleUpdate = async (event) => {
    event.preventDefault();
    
    
    try {
      const response = await fetch(
        `http://localhost:9000/api/exams/${examId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(exam),
        }
    
      );

      if (!response.ok) {
        throw new Error("Failed to update exam");
      }
navigateTo('/exams')
      // Exam successfully updated
      console.log("Exam update successfully");
  
    } catch (error) {
      console.error("Error updating Exam", error.message);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleUpdate}>
      <h3>{title}</h3>

      <p>
        <label htmlFor="patientName">Patient Name</label>
        <input
          id="patientName"
          type="text"
          name="patientName"
          defaultValue={examId ? exam.patientName : ''}
          onChange={(e) => setExam({ ...exam, patientName: e.target.value })}
          required
        />
      </p>

      <label htmlFor="sex">Sex</label>
      <div
        style={{ display: "flex", justifyContent: "center", width: "10rem" }}
      >
        <input
          id="sex1"
          type="radio"
          name="sex"
          value="F"
          checked={exam.sex === "F"}
          onChange={(e) => setExam({ ...exam, sex: e.target.value })}
          required
        />
        <label htmlFor="sex1">Female</label>

        <input
          id="sex2"
          type="radio"
          name="sex"
          value="M"
          checked={exam.sex === "M"}
          onChange={(e) => setExam({ ...exam, sex: e.target.value })}
          required
        />
        <label htmlFor="sex2">Male</label>

        <input
          id="sex3"
          type="radio"
          name="sex"
          value="N"
          checked={exam.sex === "N"}
          onChange={(e) => setExam({ ...exam, sex: e.target.value })}
          required
        />
        <label htmlFor="sex3">N</label>
      </div>

     
      <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          value={exam.age}
          onChange={(e) => setExam({ ...exam, age: e.target.value })}
          required
        />
   

      <p>
        <label htmlFor="bmi">Bmi </label>
        <input
          id="bmi"
          type="number"
          name="bmi"
          value={exam.bmi}
          onChange={(e) => setExam({ ...exam, bmi: e.target.value })}
          required
        />
      </p>

      <p>
        <label htmlFor="zip">Zip Code </label>
        <input
          id="zip"
          type="text"
          name="zip"
          value={exam.zipCode}
          onChange={(e) => setExam({ ...exam, zipCode: e.target.value })}
          required
        />
      </p>

      <p>
        <label htmlFor="brixiaScores">BrixiaScores </label>
        <input
          id="brixiaScores"
          type="text"
          value={exam.brixiaScores}
          onChange={(e) => setExam({ ...exam, brixiaScores: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          name="imageUrl"
          value={exam.imageURL}
          onChange={(e) => setExam({ ...exam, imageURL: e.target.value })}
          required
        />
      </p>

      <p>
        <label htmlFor="findings">Findings</label>
        <textarea
          id="findings"
          name="findings"
          rows="5"
          value={exam.keyFindings}
          onChange={(e) => setExam({ ...exam, keyFindings: e.target.value })}
          required
        />
      </p>
    

      <div className={styles.actions}>
        
      <button >
        BACK
          </button>
      
          <button type="submit" className={styles.btn} onClick={onHandleUpdate}>
            Update
          </button>
      
      </div>


    </form>
  );
};

export default UpdateForm;
