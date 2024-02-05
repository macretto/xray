const mongoose = require("mongoose");
//schema object
const Schema = mongoose.Schema;

//SCHEMA == structure of the exams input
const examsSchema = new Schema(
  {
    patientId: { type: String, required: true },
    age: { type: Number, required: true },
    sex: { type: String, required: true },
    zipCode: { type: String, required: true },
    bmi: { type: Number, required: true },
    __v: { type: Number, required: true },
    examId: { type: String, required: true },
    keyFindings: { type: String, required: true },
    brixiaScores: { type: Array, required: true },
     imageURL: { type: String, required: true},
  },
  {
    //will create prop that let us know timestamp
    timestamps: true,
  }
);

//MODEL --> passes examsSchema... 'Exams' is the collection
module.exports = mongoose.model("Exams", examsSchema);



