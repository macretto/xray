//gets all items
const getAllExamsController = async (req, res) => {
  let apiData = "https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams";
  try {
    const response = await fetch(apiData);

    if (!response.ok) {
      throw new Error("could not fetch");
    }

    const data = await response.json();

    res.status(200).json(data.exams);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
};

//gets single item by specific id

const getExamController = async (req, res) => {
  const id = req.params.id;
};

//creates new instance of item
const createExamController = (req, res) => {
  res.status(200).json({
    message: "CREATING SINGLE ITEM FROM /API/EXAMS",
  });
};

//deletes single item by specific id
const deleteExamController = (req, res) => {
  res.status(200).json({
    message: "DELETING SINGLE ITEM FROM /EXAMS/LIST/id",
  });
};

//updates single item by specific id
const updateExamController = (req, res) => {
  res.status(200).json({
    message: "UPDATING SINGLE ITEM FROM /EXAMS/LIST/id",
  });
};

module.exports = {
  getAllExamsController,
  getExamController,
  createExamController,
  deleteExamController,
  updateExamController,
};
