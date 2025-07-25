import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import BookAppointment from "./pages/BookAppointment";
import "./styles/global.css";
import Checkout from "./pages/Checkout";
import { AppointmentFormProvider } from "./context/AppointmentFormContext";
import PaymentSuccess from "./pages/PaymentSuccess";
import Appointment from "./pages/Appointment";
import Payments from "./pages/Payments";
import Notifications from "./pages/Notifications";
import EditDoctorProfile from "./pages/EditDoctorProfile";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientNotifications from "./pages/patient/PatientNotification";
import EditPatientProfile from "./pages/patient/EditPatientProfile";


function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function AppRoutes() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register", "/dashboard", "/edit-profile", "/payments"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* medical professional */}
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/book-appointment/:serviceId/:doctorId" element={<BookAppointment />} />
        <Route path="/checkout/:billingId" element={<Checkout />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        {/* Patient view */}
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/notifications" element={<PatientNotifications />} />
        <Route path="/patient/edit-profile" element={<EditPatientProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/appointment/:appointmentId/" element={<Appointment />} />
        <Route path="/edit-profile" element={<EditDoctorProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <AppointmentFormProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppointmentFormProvider>
    </>
  );
}

export default App;
