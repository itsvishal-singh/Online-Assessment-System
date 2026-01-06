import { useEffect, useState } from "react";
import API from "../services/api";

export default function StudentDashboard() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await API.get("/exams/student");
        setExams(res.data);
      } catch (error) {
        alert("Failed to load exams");
      }
    };
    fetchExams();
  }, []);

  return (
    <div className="flex-1 bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Available Exams</h1>

      {exams.length === 0 ? (
        <p className="text-gray-600">No exams available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {exam.title}
              </h2>
              <p className="text-gray-600 mb-4">
                Duration: {exam.duration} minutes
              </p>
              <p className="text-gray-600 mb-4">
                Total Marks: {exam.totalMarks}
              </p>

              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Start Exam
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
