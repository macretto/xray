import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(patient_id, exam_id, image, key_findings, brixia_score, age, sex, bmi, zip_code) {
  return { patient_id, exam_id, image, key_findings, brixia_score, age, sex, bmi, zip_code };
}

const rows = [
  createData(98056, 78764, 'image', 'broken', 15, 25, 'M', 33, 123),
  // hard code
];

export default function DenseTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.patient_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* Change this */}
              <TableCell align="right" component="th" scope="row">
                {row.patient_id}
              </TableCell>
              <Link to="">
                <TableCell align="right">{row.exam_id}</TableCell>
              </Link>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.key_findings}</TableCell>
              <TableCell align="right">{row.brixia_score}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.sex}</TableCell>
              <TableCell align="right">{row.bmi}</TableCell>
              <TableCell align="center">{row.zip_code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
