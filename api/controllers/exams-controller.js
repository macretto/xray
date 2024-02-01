
//gets all items
const getAllExamsController = async (req, res) => {
  let apiData = "https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams";
  try {
    const response = await fetch(apiData);

    if (!response.ok) {
      throw new Error("could not fetch");
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
};

//gets single item by specific id

const getExamController = async (req, res) => {
    const id = req.params.id;
    const apiUrl = "https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams";
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${apiUrl}`);
      }
  
      const data = await response.json();
      console.log(typeof(data))
  
      if (!Array.isArray(data)) {
        return res.status(500).json({ error: "Unexpected data format from the API" });
      }
  
      const exam = data.find((exam) => exam.id === id);
  
      if (!exam) {
        return res.status(404).json({ message: `No exam found with ID: ${id}` });
      }
  
      res.status(200).json(exam);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    }
  };
  

//creates new instance of item
const createExamController = (req, res) => {
  res.status(200).json({
    message: "CREATING SINGLE ITEM FROM /API/LIST/id",
  });
};

//deletes single item by specific id
const deleteExamController = (req, res) => {
  res.status(200).json({
    message: "DELETING SINGLE ITEM FROM /API/LIST/id",
  });
};

//updates single item by specific id
const updateExamController = (req, res) => {
  res.status(200).json({
    message: "UPDATING SINGLE ITEM FROM /API/LIST/id",
  });
};

module.exports = {
  getAllExamsController,
  getExamController,
  createExamController,
  deleteExamController,
  updateExamController,
};
