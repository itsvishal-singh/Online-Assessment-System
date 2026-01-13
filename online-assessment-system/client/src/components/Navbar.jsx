import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedName = localStorage.getItem("name");

    if (token) {
      setIsLoggedIn(true);
      setRole(storedRole);
      setName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const linkClass = "cursor-pointer hover:underline underline-offset-4";

  return (
    <nav className="bg-gradient-to-r from-[#0b1a2e] to-[#0f223d] text-white px-8 py-4 flex items-center justify-between shadow-lg">

      {/* LOGO */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="bg-[#132c4f] p-2 rounded-lg">👑</div>
        <span className="text-xl font-bold underline underline-offset-4">
          Assess Your Self
        </span>
      </div>

      {/* LINKS */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>

        {role === "student" && (
          <li><NavLink to="/student" className={linkClass}>Dashboard</NavLink></li>
        )}

        {role === "admin" && (
          <>
            <li><NavLink to="/admin" className={linkClass}>Admin Dashboard</NavLink></li>
            <li><NavLink to="/admin/exams" className={linkClass}>Manage Exams</NavLink></li>
          </>
        )}
      </ul>

      {/* USER INFO + LOGOUT */}
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <div className="text-sm bg-[#132c4f] px-4 py-1.5 rounded-full">
            👤 <span className="font-semibold">{name}</span>{" "}
            <span className="text-gray-300">
              ({role})
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="px-5 py-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-1.5 bg-white text-black rounded-full hover:bg-gray-200 transition"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
