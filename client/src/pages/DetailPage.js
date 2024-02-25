import React, { useState, useEffect } from "react";
import ExamItem from "../components/ExamItem";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const {examId}= useParams(); //param passed to ExamItem component for rendering




  return (
    <div>
      Detail PAge displaying....

      <p>ID:{examId}</p>
      <ExamItem exam={examId} />
    </div>
  );
};

export default DetailPage;
