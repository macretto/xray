import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const Products = () => {
  const [editMode, setEditMode] = useState(false);
  const [patientInfo, setPatientInfo] = useState({
    patientID: "123",
    age: 25,
    sex: "M",
    bmi: 23,
    zipCode: "12345",
    examID: "789",
    date: "2024-01-01",
  });

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Implement your save logic here
    setEditMode(false);
  };

  const handleInputChange = (field, value) => {
    setPatientInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
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
              value={patientInfo.patientID}
              onChange={(e) => handleInputChange("patientID", e.target.value)}
            />
            <TextField
              label="Age"
              value={patientInfo.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
            />
            <TextField
              label="Sex"
              value={patientInfo.sex}
              onChange={(e) => handleInputChange("sex", e.target.value)}
            />
            <TextField
              label="BMI"
              value={patientInfo.bmi}
              onChange={(e) => handleInputChange("bmi", e.target.value)}
            />
            <TextField
              label="Zip Code"
              value={patientInfo.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
            <TextField
              label="Exam ID"
              value={patientInfo.examID}
              onChange={(e) => handleInputChange("examID", e.target.value)}
            />
            <TextField
              label="Date"
              value={patientInfo.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
            />
            <Button variant="outlined" onClick={handleSaveClick}>
              Save
            </Button>
          </>
        ) : (
          <>
            <p>Patient ID: {patientInfo.patientID} </p>
            <p>Age: {patientInfo.age}</p>
            <p>Sex: {patientInfo.sex} </p>
            <p>BMI: {patientInfo.bmi}</p>
            <p>Zip Code: {patientInfo.zipCode} </p>
            <p>Exam ID: {patientInfo.examID} </p>
            <p>Date: {patientInfo.date}</p>
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

export default Products;
