import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import SelectRole from "./pages/auth/SelectRole";
import Services from "./components/Services";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import ServiceDetail from "./pages/ServiceDetail";
import "./styles/global.css";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

// function RegisterAndLogout() {
//   localStorage.clear()
//   return <Register />
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
