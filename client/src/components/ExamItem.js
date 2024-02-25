import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./examItem.module.css";

const ExamItem = ({ exam }) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true
        setIsLoading(true);

        // Fetch data from the API
        const response = await fetch(`http://localhost:9000/api/exams/${exam}`);
        if (!response.ok) {
          // Handle error if response is not successful
          throw new Error('Network response was not ok');
        }

        // Parse JSON response
        const result = await response.json();

        // Update state with fetched data
        setData(result);
        setError(null);
      } catch (error) {
        // Handle error if fetch fails
        setError(error.message);
        setData(null);
      } finally {
        // Set loading state to false regardless of success or failure
        setIsLoading(false);
      }
    };

    // Call fetchData function when component mounts
    fetchData();

    // Optional: Cleanup function if needed
    return () => {
      // Cleanup logic if needed
    };
  }, [exam]); // Empty dependency array to run effect only once on mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <article>
      <p>EXAM{exam}</p>
      <p>{data}</p>

     
 <div>ITEM PAGE</div>

      <div>
        <button>DELETE</button>
        <button>DELETE</button>
      </div>
      {/* </div> */}
    </article>
  );
};

export default ExamItem;
