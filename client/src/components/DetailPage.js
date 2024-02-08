import React from "react";
import { Button } from "@mui/material";



const DetailPage = () => {
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
        <p>Patient ID: </p>
        <p>Age: </p>
        <p>Sex: </p>
        <p>BMI: </p>
        <p>Zip Code: </p>
        <p>Exam ID: </p>
        <p>Date</p>
        <Button variant="outlined">Edit</Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </div>
    </div>
  );
};
export default DetailPage;
