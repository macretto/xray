import React from "react";


const DetailPage = () => {
  return (
    <>
      <h1>Patient Info</h1>

      <img></img>

      <p>Patient ID: </p>
      <p> Age: </p>
      <p>Sex: </p>
      <p>BMI: </p>
      <p>Zip Code: </p>
      <p>Exam ID: </p>

      <p>Date</p>

      <Button variant="outlined">Edit</Button>
      <Button variant="outlined" color="error"> Delete</Button>
    </>
  );
};
export default DetailPage;
