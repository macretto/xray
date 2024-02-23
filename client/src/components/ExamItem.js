const ExamItem = ({ item }) => {
  return (
    <div style={{border:'solid black 1px ', width: '60rem', margin: '1rem auto' }}> 
      <li>
        <img src={item.imageURL} style={{ width: "50px", height: "50px" }} />
      </li>

      <span>ID: {item._id}</span>

      <span>PatientID: {item.patientId}</span>
      <div>{item.examId}</div>
      <div>Age: {item.age}</div>
      <div>Sex: {item.sex}</div>
      <div>Bmi: {item.bmi}</div>
      <div>Zip Code: {item.zipCode}</div>
      <div align="right"></div>
      <div>Findings:{item.keyFindings}</div>

      <div>Scores: {item.brixiaScores}</div>
      <div>Scores: {item.createdAt}</div>
    </div>
  );
};

export default ExamItem;
