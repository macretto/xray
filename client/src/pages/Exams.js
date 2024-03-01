import React, { useEffect, useState } from "react";

import ExamsList from "../components/ExamsList";
import ExamsNav from "../components/ExamsNav";

const API_URL = "http://localhost:9000/api/exams"; // Change this to your API endpoint
const Exams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //states
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //will handle the search of the value evaluated to be filtered
  //received a parameter as data
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
    return <div style={{textAlign:'center', margin: '3rem 0'}}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ textAlign: "center", margin: "2rem auto" }}>
      <ExamsNav onSearch={handleSearch} />
      <ExamsList items={data} searchTerm={searchTerm} />
    </div>
  );
};

export default Exams;
