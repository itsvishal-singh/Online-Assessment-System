const Exam = require("../models/Exam");

// CREATE EXAM (ADMIN)
exports.createExam = async (req, res) => {
  try {
    const { title, description, duration, totalMarks } = req.body;

    if (!title || !duration || !totalMarks) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const exam = await Exam.create({
      title,
      description,
      duration,
      totalMarks,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Exam created successfully",
      exam,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET ALL EXAMS (ADMIN / STUDENT)
exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET EXAMS FOR STUDENTS
exports.getExamsForStudents = async (req, res) => {
  try {
    const exams = await Exam.find().select("title duration totalMarks");
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Question = require("../models/Question");
const Result = require("../models/Result");

// SUBMIT EXAM (STUDENT)
exports.submitExam = async (req, res) => {
  try {
    const { examId, answers } = req.body;

    let obtainedMarks = 0;
    const evaluatedAnswers = [];

    for (let ans of answers) {
      const question = await Question.findById(ans.questionId);

      let isCorrect = false;
      let marks = 0;

      if (question.correctAnswer === ans.selectedOption) {
        isCorrect = true;
        marks = question.marks;
        obtainedMarks += marks;
      }

      evaluatedAnswers.push({
        question: question._id,
        selectedOption: ans.selectedOption,
        isCorrect,
        marksObtained: marks,
      });
    }

    const result = await Result.create({
      student: req.user._id,
      exam: examId,
      answers: evaluatedAnswers,
      obtainedMarks,
    });

    res.json({
      message: "Exam submitted successfully",
      obtainedMarks,
      resultId: result._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
