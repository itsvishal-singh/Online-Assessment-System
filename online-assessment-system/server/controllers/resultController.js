const Result = require("../models/Result");

// STUDENT: Get own results
exports.getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user._id })
      .populate("exam", "title totalMarks")
      .populate("answers.question", "questionText options");

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN: Get all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find()
      .populate("student", "name email")
      .populate("exam", "title totalMarks");

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
