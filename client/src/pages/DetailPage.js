import ExamItem from "../components/ExamItem";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";

const DetailPage = () => {
  const [close, setClose] = useState(false);

  const { examId } = useParams(); //param passed to ExamItem component for rendering
  const navigateTo = useNavigate();

  //handler to delete in details page
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:9000/api/exams/${examId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete exam");
      }

      // Exam successfully deleted
      console.log("Exam deleted successfully");
      navigateTo("/exams");
    } catch (error) {
      console.error("Error deleting exam:", error.message);
    }
  };

  const closeHandler = () => {
    setClose(() => !close);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "rgb(68, 68, 68)" }}>Patient Details </h1>
      {!close ? (
        <ExamItem
          exam={examId}
          handlerDelete={handleDelete}
          onClose={closeHandler}
        />
      ) : (
        <UpdateForm examId={examId} />
      )}
    </div>
  );
};

export default DetailPage;
