const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");
const {
  createExam,
  getAllExams
} = require("../controllers/examController");
const { getExamsForStudents } = require("../controllers/examController");
const { submitExam } = require("../controllers/examController");

router.post("/create", protect, isAdmin, createExam);
router.get("/", protect, getAllExams);
router.get("/student", protect, getExamsForStudents);
router.post("/submit", protect, submitExam);

module.exports = router;
