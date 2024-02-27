import { } from "react-router-dom";
import ExamForm from '../components/ExamForm'
const NewExam = ()=> {
  
  return (

    <ExamForm title={"Create Exam"} buttonTitle="POST" method={"post"}/>
  )
}
export default NewExam;
