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
  res.status(200).json({message: "GETTING SPECIFIC EXAM BY ID --> /api/exams/:id"})
}

//creates new instance of item
const createExamController = (req, res) => {
  res.status(200).json({message: "CREATING NEW EXAM--> /api/exams"})
};

//deletes single item by specific id
const deleteExamController = (req, res) => {
  res.status(200).json({message: "DELETING SPECIFIC EXAM BY ID --> /api/exams/:id"})
};

//updates single item by specific id
const updateExamController = (req, res) => {
  res.status(200).json("UPDATING SPECIFIC EXAM BY ID --> /api/exams/:id")
};

module.exports = {
  getAllExamsController,
  getExamController,
  createExamController,
  deleteExamController,
  updateExamController,
};
