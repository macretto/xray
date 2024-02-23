



const ExamItem = ({ item }) => {

  return (
    <>
      <li>{item._id}</li>
      <li>{item.patientId}</li>
      <img src={item._imageURL} />
      <li>{item.patientId}</li>
      <li>{item._id}</li>
      <li>{item.patientId}</li>

    </>

  );
};

export default ExamItem;
