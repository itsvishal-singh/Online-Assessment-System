const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");
const {
  addQuestion,
  getQuestionsForExam
} = require("../controllers/questionController");

// admin
router.post("/add", protect, isAdmin, addQuestion);

// student
router.get("/exam/:examId", protect, getQuestionsForExam);

module.exports = router;
