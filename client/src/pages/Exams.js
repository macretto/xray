import React, { useEffect, useState } from "react";

import ExamsList from "../components/ExamsList";
import ExamsNav from "../components/ExamsNav";
import ExamsFilter from "../components/ExamFilter";
const API_URL = "http://localhost:9000/api/exams"; // Change this to your API endpoint
const Exams = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ textAlign: "center", margin: "2rem auto" }}>
      <ExamsNav />
      <ExamsFilter onSearch={handleSearch} />
      <ExamsList items={data}  searchTerm={searchTerm}/>
    </div>
  );
};

export default Exams;
