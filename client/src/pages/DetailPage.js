import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";



const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
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

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      const url = `http://localhost:9000/api/exams/${id}`;
      const fetchConfig = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, fetchConfig);

      if (!response.ok) {
        console.error(`Failed to update exam with ID ${id}. Status: ${response.status}`);
        return;
      }
    } catch (error) {
      console.error("error updating exam:", error);
    }
    setEditMode(false);
  };

  const handleInputChange = (field, value) => {
    setData((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  const handleDelete = async () => {
    try {
      const url = `http://localhost:9000/api/exams/${id}`;
      const fetchConfig = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, fetchConfig);
      if (!response.ok) {
        console.error(`Failed to delete exam. `);
        return;
      }
      console.log(`Sucessfully deleted exam with ID ${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting exam", error);
    }
  };


  return (
    <div className="exam-container">
      <div className="image-container">
        <img
          src={data.imageURL}
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
              value={data.patientId}
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
            <p>Patient ID: {data.patientId} </p>
            <p>Age: {data.age}</p>
            <p>Sex: {data.sex} </p>
            <p>BMI: {data.bmi}</p>
            <p>Zip Code: {data.zipCode} </p>
            <p>Exam ID: {data.examId} </p>
            <p>Date: {data.updatedAt}</p>
            <Button variant="outlined" onClick={handleEditClick}>
              Edit
            </Button>
            <Button variant="outlined" onClick={handleDelete} color="error">
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
