import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";

const AddExamPage = () => {
  // State to store form data for the new exam
  const [examData, setExamData] = useState({
    name: '',
    description: '',
    brixiaScore: '',
    // Add other necessary attributes here
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send examData to your backend API to add a new exam
      const response = await fetch('http://localhost:9000/api/exams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(examData),
      });
      if (!response.ok) {
        throw new Error('Failed to add exam');
      }
      // Reset form data after successful submission
      setExamData({
        name: '',
        description: '',
        brixiaScore: '',
        // Reset other necessary attributes here
      });
      alert('Exam added successfully!');
    } catch (error) {
      console.error('Error adding exam:', error);
      alert('Failed to add exam. Please try again later.');
    }
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExamData({ ...examData, [name]: value });
  };

  return (
    <>
      <h1>Add New Exam</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Exam Name"
          value={examData.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="description"
          label="Description"
          value={examData.description}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="brixiaScore"
          label="Brixia Score"
          value={examData.brixiaScore}
          onChange={handleInputChange}
          required
        />
        {/* Add other necessary attributes here */}
        <Button type="submit" variant="contained" color="primary">Add Exam</Button>
      </form>
    </>
  );
};

export default AddExamPage;
