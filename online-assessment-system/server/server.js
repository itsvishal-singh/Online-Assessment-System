const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/exams", require("./routes/examRoutes"));
app.use("/api/questions", require("./routes/questionRoutes"));
app.use("/api/results", require("./routes/resultRoutes"));




// test route
app.get("/", (req, res) => {
  res.send("API running successfully 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
