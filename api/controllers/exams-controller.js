const Exams = require("../models/examsModels");
const mongoose = require("mongoose");

//gets all exams
const getAllExamsController = async (req, res) => {
  const allExams = await Exams.find({}).sort({ createdAt: -1 }); //find all exams in mongodb and sort them
  res.status(200).json(allExams);
};

//gets single item by specific id
const getExamController = async (req, res) => {
  const { id } = req.params; //grabbing id params from the request object
console.log(req.params.id)
  //?handling error if no id is found
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Exam does not exist" });
  }

  const exam = await Exams.findById(id); //finding by specific id from params
  //error handling for not id found
  if (!exam) {
    return res.status(404).json({ error: "NO EXAM FOUND" });
  }

  res.status(200).json(exam); //return that specific id from exam
};

//creates new exam instance
const createExamController = async (req, res) => {
  //grabbing all params object from the request object
  const {
    patientId,
    patientName,
    age,
    sex,
    zipCode,
    bmi,
    __v,
    examId,
    keyFindings,
    brixiaScores,
    imageURL,
  } = req.body;

  //create a new instance of the object and add it to the database
  try {
    const newExam = await Exams.create({
      patientId,
      patientName,
      age,
      sex,
      zipCode,
      bmi,
      __v,
      examId,
      keyFindings,
      brixiaScores,
      imageURL,
    });
    res.status(200).json(newExam);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//deletes single item by specific id
const deleteExamController = async (req, res) => {
  const { id } = req.params; //id from params

  //check if exist
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such exam listed" });
  }
  //__id == mongoDB Id/ delete id === __id
  const exam = await Exams.findOneAndDelete({ _id: id });
  //if no exam, throw error
  if (!exam) {
    return res.status(400).json({ error: "No such exam" });
  }

  res.status(200).json(exam);
};

//updates single item by specific id
const updateExamController = async (req, res) => {
  const { id } = req.params;
  //check if exist in mongoose
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such exam" });
  }
  //__id == mongoDB Id/ update id === __id
  const exam = await Exams.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  //if no exam, throw error
  if (!exam) {
    return res.status(400).json({ error: "No such exam available" });
  }

  res.status(200).json(exam);
};

module.exports = {
  getAllExamsController,
  getExamController,
  createExamController,
  deleteExamController,
  updateExamController,
};
