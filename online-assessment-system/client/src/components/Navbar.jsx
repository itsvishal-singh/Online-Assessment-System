import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true);
      setRole(storedRole);
    } else {
      setIsLoggedIn(false);
      setRole(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setRole(null);
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

      {/* COMMON LINKS */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>

        {isLoggedIn && role === "student" && (
          <li><NavLink to="/student" className={linkClass}>Dashboard</NavLink></li>
        )}

        {isLoggedIn && role === "admin" && (
          <>
            <li><NavLink to="/admin" className={linkClass}>Admin Dashboard</NavLink></li>
            <li><NavLink to="/admin/exams" className={linkClass}>Manage Exams</NavLink></li>
          </>
        )}
      </ul>

      {/* AUTH ACTIONS */}
      <div className="flex gap-4">
        {!isLoggedIn ? (
          <>
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
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-5 py-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
