import React, { useEffect, useState } from 'react';
import ExamsList from '../components/ExamsList';

const API_URL = 'http://localhost:9000/api/exams'; // Change this to your API endpoint
const Exams = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
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
    <div style={{textAlign: 'center'}}>
      <h2>EXAMS PAGE (CSS LATER)</h2>
      <span>SEARCH BOX HERE - </span>
      <span><button>CREATE EXAM BUTTON HERE </button> - </span>
      <span><button>ANY OTHER BUTTON HERE </button> - </span>
      <ExamsList items={data} />
    </div>
  );
};

export default Exams;
