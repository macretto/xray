import ExamItem from "../components/ExamItem";
import { useParams,useNavigate } from "react-router-dom";


const DetailPage = () => {
  const { examId } = useParams(); //param passed to ExamItem component for rendering
const navigateTo = useNavigate()


//handler to delete in details page
const handleDelete = async () => {
  try {
    const response = await fetch(`http://localhost:9000/api/exams/${examId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete exam');
    }

    // Exam successfully deleted
    console.log('Exam deleted successfully');
navigateTo('/exams')

  } catch (error) {
    console.error('Error deleting exam:', error.message);
  }
};

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: "rgb(68, 68, 68)" }}>Patient Details </h1>
      <ExamItem exam={examId}  handlerDelete={handleDelete} />
    </div>
  );
};

export default DetailPage;
