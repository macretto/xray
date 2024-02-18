import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

import Home from './Home';

const DetailPage = () => {
  const [editMode, setEditMode] = useState(false);
  // const [patientInfo, setPatientInfo] = useState({
  //   patientID: "123",
  //   age: 25,
  //   sex: "M",
  //   bmi: 23,
  //   zipCode: "12345",
  //   examID: "789",
  //   date: "2024-01-01",
  // });

  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/exams/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('Error fetching exam details', error);
      }
    };
    fetchData();
  }, [id]);

  // if (!data){
  //   return <div>Loading...</div>
  // }

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Implement your save logic here
    setEditMode(false);
  };

  const handleInputChange = (field, value) => {
    setData((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  return (
    <div className="exam-container">
      <div className="image-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
          alt="React Logo"
          width={500}
          height={500}
        />
      </div>
      <div className="text-container">
        <h1>Patient Info</h1>

        {editMode ? (
          <>
            <TextField
              label="Patient ID"
              value={data.patientID}
              onChange={(e) => handleInputChange("patientID", e.target.value)}
            />
            <TextField
              label="Age"
              value={data.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
            />
            <TextField
              label="Sex"
              value={data.sex}
              onChange={(e) => handleInputChange("sex", e.target.value)}
            />
            <TextField
              label="BMI"
              value={data.bmi}
              onChange={(e) => handleInputChange("bmi", e.target.value)}
            />
            <TextField
              label="Zip Code"
              value={data.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
            <TextField
              label="Exam ID"
              value={data.examID}
              onChange={(e) => handleInputChange("examID", e.target.value)}
            />
            <TextField
              label="Date"
              value={data.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
            />
            <Button variant="outlined" onClick={handleSaveClick}>
              Save
            </Button>
          </>
        ) : (
          <>
            <p>Patient ID: {data.patientID} </p>
            <p>Age: {data.age}</p>
            <p>Sex: {data.sex} </p>
            <p>BMI: {data.bmi}</p>
            <p>Zip Code: {data.zipCode} </p>
            <p>Exam ID: {data.examID} </p>
            <p>Date: {data.date}</p>
            <Button variant="outlined" onClick={handleEditClick}>
              Edit
            </Button>
            <Button variant="outlined" color="error">
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
