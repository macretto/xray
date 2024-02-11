import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';



export default function DenseTable() {



  const [data, setData] = useState([]);

  useEffect(() => {
    datas();
  }, []);

  const datas = async () => {
    const response = await fetch('http://localhost:9000/api/exams');
    setData(await response.json());
  };

  function createData(patientId, examId, image, keyFindings, brixiaScores, age, sex, bmi, zipCode) {
    return { patientId, examId, image, keyFindings, brixiaScores, age, sex, bmi, zipCode };
  }

  const rows = [
    createData(98056, 78764, 'image', 'broken', 15, 25, 'M', 33, 123),
    // hard code
  ];

  console.log(data);


  // const ExamData = () => {
  //   const [exams, setExams] = useState([]);

  //   React.useEffect(() => {
  //     fetch(`http://localhost:9000/api/exams`);

  //   });
  // };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Patient ID</TableCell>
            <TableCell align="right">Exam ID </TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Key Findings</TableCell>
            <TableCell align="right">Brixia Score</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Sex</TableCell>
            <TableCell align="right">BMI</TableCell>
            <TableCell align="center">Zip Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Data Mapping */}
          {data.map((data) => (
            <TableRow
              key={data.patient_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* Change this */}
              <TableCell align="right" component="th" scope="row">
                {data.patientId}
              </TableCell>
              <Link to="/">
                <TableCell align="right">{data.examId}</TableCell>
              </Link>
              <TableCell align="right">{data.image}</TableCell>
              <TableCell align="right">{data.keyFindings}</TableCell>
              <TableCell align="right">{data.brixiaScores}</TableCell>
              <TableCell align="right">{data.age}</TableCell>
              <TableCell align="right">{data.sex}</TableCell>
              <TableCell align="right">{data.bmi}</TableCell>
              <TableCell align="center">{data.zipCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
