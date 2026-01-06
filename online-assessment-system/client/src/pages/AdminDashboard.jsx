import { useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  const handleCreateExam = async (e) => {
    e.preventDefault();
    try {
      await API.post("/exams/create", {
        title,
        description,
        duration,
        totalMarks,
      });

      alert("Exam created successfully");
      setTitle("");
      setDescription("");
      setDuration("");
      setTotalMarks("");
    } catch (error) {
      alert("Failed to create exam");
    }
  };

  return (
    <div className="flex-1 bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl">
        <h2 className="text-xl font-semibold mb-4">
          Create New Exam
        </h2>

        <form onSubmit={handleCreateExam}>
          <input
            className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Exam Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />

          <input
            type="number"
            className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Duration (minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />

          <input
            type="number"
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Total Marks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Create Exam
          </button>
        </form>
      </div>
    </div>
  );
}
