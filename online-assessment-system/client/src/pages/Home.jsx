import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b1a2e] text-white">
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT HERO CARD */}
        <div className="lg:col-span-2 bg-[#132c4f] rounded-[26px] shadow-2xl p-12">
          <h1 className="text-3xl font-bold text-center mb-8">
            Online Assessment System
          </h1>

          {/* IMAGE BLOCKS */}
          <div className="flex flex-col items-center gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 w-72 text-center text-black shadow">
              <p className="font-semibold mb-1">Attend Quiz</p>
              <p className="text-sm text-gray-600">
                Participate in MCQ based online exams
              </p>
            </div>

            <div className="bg-black rounded-xl p-6 w-72 text-center shadow">
              <p className="text-red-500 text-2xl font-bold">
                INSTANT RESULTS
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Get instant evaluation after submission
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="font-semibold mb-3">Get Started</p>

            <div className="flex justify-center gap-4 mb-2">
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-1.5 border border-white rounded hover:bg-white hover:text-black transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="px-6 py-1.5 bg-white text-black rounded hover:bg-gray-200 transition"
              >
                Register
              </button>
            </div>

            <p className="text-sm text-gray-300">to Take Quiz</p>
          </div>
        </div>

        {/* RIGHT FEATURES CARD */}
        <div className="bg-[#132c4f] rounded-[26px] shadow-2xl p-10">
          <h2 className="text-xl font-bold mb-6 text-center">
            Quick Features Highlight
          </h2>

          <ul className="space-y-4 text-sm">
            <li>Online MCQs Exams</li>
            <li>Auto Grading</li>
            <li>Instant Results</li>
            <li>Timer Based Exam/Test</li>
            <li>Negative Marking Support</li>
            <li>Question Categories</li>
            <li>Download Result</li>
            <li>Attempts History</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
