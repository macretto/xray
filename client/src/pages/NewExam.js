import { } from "react-router-dom";
import ExamForm from '../components/ExamForm'
const NewExam = ()=> {
  
  return (

    <ExamForm title={"Create Exam"} buttonTitle="CREATE" method={"POST"}/>
  )
}
export default NewExam;
