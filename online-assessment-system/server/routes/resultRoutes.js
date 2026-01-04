const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");
const {
  getMyResults,
  getAllResults,
} = require("../controllers/resultController");

// student
router.get("/my", protect, getMyResults);

// admin
router.get("/all", protect, isAdmin, getAllResults);

module.exports = router;
