const Question = require("../models/Question");

// ADD QUESTION (ADMIN)
exports.addQuestion = async (req, res) => {
  try {
    const { examId, questionText, options, correctAnswer, marks } = req.body;

    if (
      !examId ||
      !questionText ||
      !options ||
      options.length < 2 ||
      correctAnswer === undefined
    ) {
      return res.status(400).json({ message: "Invalid question data" });
    }

    const question = await Question.create({
      exam: examId,
      questionText,
      options,
      correctAnswer,
      marks,
    });

    res.status(201).json({
      message: "Question added successfully",
      question,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET QUESTIONS FOR STUDENT (WITHOUT ANSWERS)
exports.getQuestionsForExam = async (req, res) => {
  try {
    const { examId } = req.params;

    const questions = await Question.find({ exam: examId })
      .select("-correctAnswer"); // IMPORTANT: hide answer

    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
