import React from 'react';
import ExamItem from "./ExamItem";
import { Link } from 'react-router-dom';

const ExamsList = ({ items }) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Patient ID</th>
            <th> Exam ID</th>
            <th> Image</th>
            <th> Key Findings</th>
            <th> Brixia Score</th>
            <th> Age</th>
            <th> Sex</th>
            <th> BMI</th>
            <th> Zip Code</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item._id}>
              <td>{item.patientId}</td>
              <Link to={`detail/${item._id}`}> <td>{item.examId}</td></Link>
              <td><img src={item.imageURL} alt={`Patient ${item.patientId}`} width="50" height="50" /></td>
              <td>{item.keyFindings}</td>
              <td>{item.brixiaScores}</td>
              <td>{item.age}</td>
              <td>{item.sex}</td>
              <td>{item.bmi}</td>
              <td>{item.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamsList;
