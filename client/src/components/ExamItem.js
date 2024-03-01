import { useEffect, useState } from "react";
import Dialog from "./Pagination";
import styles from "./ExamItem.module.css";

const ExamItem = ({ exam, handlerDelete, onClose }) => {
  const [data, setData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      handlerDelete();
    }
  }

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
        <div className={styles.item}>
          <h3 className={styles.titles}>
            Last Updated:{" "}
            <span>
              {data.updatedAt.toLocaleString().slice(5, 7)}/
              {data.updatedAt.slice(8, 10) - 1}/{data.updatedAt.slice(0, 4)}
            </span>
          </h3>
        </div>
        <div className={styles.actions}>
          <button className={styles.delete} onClick={startDeleteHandler}>
            Delete{" "}
          </button>

          <button className={styles.update} onClick={onClose}>
            {" "}
            Update{" "}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ExamItem;
