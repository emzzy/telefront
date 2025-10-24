import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
// import "../styles/Form.css";

function Form({ route, method }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Log In" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { email, password });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        const currentUser = await api.get("/api/get-user/");
        const user = currentUser.data;
        console.log(`user is, `, user);

        if (user.data.is_patient) {
          localStorage.setItem("userRole", "patient");
          return navigate("/");
        } else if (user.data.is_medical_professional) {
          localStorage.setItem("userRole", "doctor");
          return navigate("/dashboard");
        } else if (user.data.is_admin) {
          localStorage.setItem("userRole", "admin");
        } else if (user.data.is_staff) {
          localStorage.setItem("userRole", "staff");
        }
        return navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert("Login failed. Please check your login credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-xs lg:max-w-sm p-2">
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label className="text-left font-semibold mb-1">Email</label>
          <input
            className="mb-6 p-3 lg:p-4 border-2 rounded-lg focus:border-tele-blue-dark focus:outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label className="text-left font-semibold mb-1">Password</label>
          <input
            className="p-3 lg:p-4 border-2 rounded-lg focus:border-tele-blue-dark focus:outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="flex justify-between text-sm font-semibold my-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                // checked={remember}
                // onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 accent-black rounded"
                aria-label="Remember me"
              />
              <span>Remember me</span>
            </label>{" "}
            <Link to="">
              <span className="text-tele-blue underline">Forgot password?</span>
            </Link>
          </div>
          <button
            className="p-3 lg:p-4 rounded-lg bg-tele-blue-light hover:bg-tele-blue-dark text-white font-semibold"
            type="submit"
          >
            {name}
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
