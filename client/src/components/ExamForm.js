import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExamForm.module.css";

const ExamForm = () => {
  let navigateTo= useNavigate();

  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("n");
  const [bmi, setBmi] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [brixiaScores, setBrixiaScores] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [keyFindings, setKeyFindings] = useState("");

  const URL = "http://localhost:9000/api/exams";

  // function that randomlyy choses an id for examId and patientID
  //no id is assigned tothem from mongo or node.
  const randomNumber = (type) => {
    let rand = Math.round(Math.random() * 50000000000);

    if (type === "patientId") {
      return `Patient-${rand}`;
    } else {
      return `Exam-${rand}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newExam = {
      patientName,
      age,
      examId: randomNumber("examId"),
      bmi,
      patientId: randomNumber("patientId"),
      sex,
      __v: 0,
      zipCode,
      brixiaScores,
      imageURL,
      keyFindings,
    };

    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(newExam),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      throw new Error("ERROR IN POST " + json);
    }
    if (response.ok) {
      // setPatientName("");
      setAge("");
      setSex("");
      setBmi("");
      setZipCode("");
      setBrixiaScores([]);
      setImageURL("");
      setKeyFindings("");
      navigateTo("/exams");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Create Exam</h3>

      <p>
        <label htmlFor="name">Patient Name</label>
        <input
          id="name"
          type="text"
          name="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
      </p>

      <label htmlFor="name">Sex</label>
      <div
        style={{ display: "flex", justifyContent: "center", width: "10rem" }}
      >
        <span>F:</span>
        <input
          className={styles.sep}
          id="sex"
          type="radio"
          name="sex"
          checked={sex === "F" || "f"}
          value="F"
          onChange={(e) => setSex(e.target.value)}
          required
        />

        <span className={styles.sep}>M:</span>
        <input
          className={styles.sep}
          id="sex"
          type="radio"
          name="sex"
          checked={sex === "M" || "m"}
          value="M"
          onChange={(e) => setSex(e.target.value)}
          required
        />

        <span className={styles.sep}>N:</span>
        <input
          className={styles.sep}
          id="sex"
          type="radio"
          name="sex"
          checked={sex === "N" || "n"}
          value="N"
          onChange={(e) => setSex(e.target.value)}
          required
        />
      </div>
      <p>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </p>

      <p>
        <label htmlFor="bmi">Bmi </label>
        <input
          id="bmi"
          type="number"
          name="bmi"
          value={bmi}
          onChange={(e) => setBmi(e.target.value)}
          required
        />
      </p>

      <p>
        <label htmlFor="date">Zip Code </label>
        <input
          id="zip"
          type="text"
          name="zip"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </p>

      <p>
        <label htmlFor="brixiaScores">BrixiaScores </label>
        <input
          type="text"
          value={brixiaScores.join(",")}
          onChange={(e) => setBrixiaScores(e.target.value.split(","))}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          name="imageUrl"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
        />
      </p>

      <p>
        <label htmlFor="findings">Findings</label>
        <textarea
          id="findings"
          name="findings"
          rows="5"
          value={keyFindings}
          onChange={(e) => setKeyFindings(e.target.value)}
          required
        />
      </p>
      <p>
        <span> Created on 02/23/2024</span>
      </p>

      <div className={styles.actions}>
        <button className={styles.btn} type="submit">
          Create
        </button>
      </div>
      <div>
        {patientName}-{age}-{bmi}-{brixiaScores}-{zipCode}-{keyFindings}-{sex}
      </div>
      {randomNumber()}
      {(randomNumber("examId"), randomNumber("patientId"))}
    </form>
  );
};

export default ExamForm;
