import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ExamItem.module.css";

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
          throw new Error("Response was not ok");
        }

        // Parse JSON response
        const result = await response.json();

        setData(result);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // return () => {};
  }, [exam]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <article className={styles.items}>
      <img src={data.imageURL} alt={data.imageURL} />

      <div style={{ width: "25rem", margin: "0 auto", textAlign: "left" }}>
        <div className={styles.item}>
          <h1>{data.patientName}</h1>
          <h3 className={styles.titles}>
            Sex:
            <span> {data.sex}</span>
          </h3>
        </div>
        <div className={styles.item}>
          <h3 className={styles.titles}>
            Age:
            <span> {data.age}</span>
          </h3>
        </div>

        <div className={styles.item}>
          <h3 className={styles.titles}>
            Zip Code:
            <span> {data.zipCode}</span>
          </h3>
        </div>

        <div className={styles.item}>
          <h3 className={styles.titles}>
            Bmi:
            <span> {data.bmi}</span>
          </h3>
        </div>

        <div className={styles.item}>
          <h3 className={styles.titles}>
            Brixia Scores:
            <span> [ {data.brixiaScores} ]</span>
          </h3>
        </div>

        <div className={styles.item}>
          <h3 className={styles.titles}>Key Findings:</h3>
          <p className={styles.description}>{data.keyFindings}</p>
        </div>
        <div className={styles.actions}>
          <Link to="/">Delete</Link>
          <Link to={`update`}> Update </Link>
        </div>
      </div>
    </article>
  );
};

export default ExamItem;
