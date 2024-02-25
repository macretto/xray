import React, { useState, useEffect } from "react";
import ExamsNavigation from '../components/ExamsNavigation'
import ExamItem from "../components/ExamItem";

import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { examId } = useParams(); //param passed to ExamItem component for rendering

  return (
    <div style={{textAlign:'center'}}>
      
    <div></div>     <h1 style={{color:'rgb(68, 68, 68);'}}>Patient Details </h1>
      <ExamItem exam={examId} />
    </div>
  );
};

export default DetailPage;
