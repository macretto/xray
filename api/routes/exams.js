//routes created for the creating, deletion,update of the project.
var express = require("express");
var router = express.Router();

//imported all controllers in as an object
const {
  getAllExamsController,
  getExamController,
  createExamController,
  deleteExamController,
  updateExamController,
} = require("../controllers/exams-controller");

/* GET home page. */
router.get("/", getAllExamsController); //all exams
router.get("/:id", getExamController); //single exam
router.post("/", createExamController); //create a new exam
router.patch("/:id", deleteExamController); //update specific exam by id
router.delete("/:id", updateExamController); // delete a specifi exam by id

module.exports = router;
