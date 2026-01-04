import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, getUserRole } from "../utils/auth";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      const role = getUserRole();
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    }
  }, []);

  return (
    <div>
      <h1>Online Assessment System</h1>
      <p>Take exams, get results instantly.</p>

      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}
