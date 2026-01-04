const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    answers: [
      {
        question: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
        },
        selectedOption: Number,
        isCorrect: Boolean,
        marksObtained: Number,
      },
    ],
    totalMarks: Number,
    obtainedMarks: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
