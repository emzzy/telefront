import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";

function Form({ route, method }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { email, password });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        const currentUser = await api.get('/api/get-user/');
        const user = currentUser.data;
        console.log(`user is, `, user);

        if (user.data.is_patient) {
          localStorage.setItem('userRole', 'patient');
          return navigate("/");

        } else if (user.data.is_medical_professional) {
          localStorage.setItem('userRole', 'doctor');
          return navigate("/dashboard");

        } else if (user.data.is_admin) {
          localStorage.setItem('userRole', 'admin');

        } else if (user.data.is_staff) {
          localStorage.setItem('userRole', 'staff');
          
        }
        return navigate("/");

      } else {
        navigate("/login");
      }
    } catch (error) {
      alert('Login failed. Please check your login credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input
        className="form-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="form-button" type="submit">
        {name}
      </button>
    </form>
  );
}

export default Form;
