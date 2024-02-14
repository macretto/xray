import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";


const DetailPage = () => {
  const { examId } = useParams();
  const [examDetails, setExamDetails] = useState(null);
  const [patientInfo, setPatientInfo] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/exams/`);
        const data = await response.json();
        setExamDetails(data);
      } catch (error) {
        console.error('Error fetching exam details:', error);
      }
    };
    fetchExamDetails();
  }, [examId]);

  // if (!examDetails) {
  //   return <div>Loading...</div>;
  // }

  const handleInputChange = (field, value) => {
    setPatientInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  const handleUpdate = () => {
    setUpdateMode(false);
  };

  return (
    <div className="exam-container">
      <div className="image-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
          width={500}
          height={500}
        />
      </div>
      <div className="text-container">
        <h1>Patient Info</h1>
        <p>Patient ID:  </p>
        <p>Age: </p>
        <p>Sex: </p>
        <p>BMI: </p>
        <p>Zip Code: </p>
        <p>Exam ID: </p>
        <p>Date: </p>


        <Button variant="outlined" onClick={handleUpdate}>Edit</Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </div>
    </div>
  );
};
export default DetailPage;
