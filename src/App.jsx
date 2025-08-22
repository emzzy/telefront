import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
// import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import Payments from "./pages/Payments";
import Notifications from "./pages/Notifications";
import EditDoctorProfile from "./pages/EditDoctorProfile";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientNotifications from "./pages/patient/PatientNotification";
import EditPatientProfile from "./pages/patient/EditPatientProfile";
import PatientAppointmentDetail from "./pages/patient/PatientAppointmentDetail";
import PatientAppointments from "./pages/patient/PatientAppointments";
import PatientLayout from "./components/layout/PatientLayout";
import DoctorLayout from "./components/layout/DoctorLayout";
import RoomsList from "./pages/chat/RoomsList";
import ChatRoom from "./pages/chat/ChatRoom";
import ChatList from "./components/ChatList";
import Conversation from "./components/Conversation";


function AppRoutes() {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/login", 
    "/register", 
    "/dashboard", 
    "/edit-profile", 
    "/payments", 
    "/notifications",
    "/appointments",
    "/appointment/"
  ];
  
  // Check if current path starts with patient or doctor routes
  const isPatientRoute = location.pathname.startsWith("/patient");
  const isDoctorRoute = location.pathname.startsWith("/doctor") || 
  ["/dashboard", "/edit-profile", "/payments", "/notifications", "/appointments"].includes(location.pathname);
  
  const shouldHideNavbar = hideNavbarRoutes.some(route =>
    location.pathname.startsWith(route) || location.pathname === route
  ) || isPatientRoute || isDoctorRoute;

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/book-appointment/:serviceId/:doctorId" element={<BookAppointment />} />
        <Route path="/checkout/:billingId" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/chats" element={<ChatList />} />
        <Route path="/chat/:conversationId" element={<Conversation />} />

        {/* Doctor Routes - Wrapped in DoctorLayout */}
        <Route path="/" element={<DoctorLayout />}>
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="appointments" element={<Appointment />} />
          <Route path="payments" element={<Payments />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="appointment/:appointmentId" element={<Appointment />} />
          <Route path="edit-profile" element={<EditDoctorProfile />} />
          <Route path="chat-room" element={<RoomsList />} />
        </Route>

        {/* Patient Routes - Wrapped in PatientLayout */}
        <Route path="/patient" element={<PatientLayout />}>
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="appointments" element={<PatientAppointments />} />
          <Route path="edit-profile" element={<EditPatientProfile />} />
          <Route path="notifications" element={<PatientNotifications />} />
          <Route path="appointment/:appointmentId/detail" element={<PatientAppointmentDetail />} />
          <Route path="chat/" element={<RoomsList />} />
          <Route path="chat/:slug" element={<ChatRoom />} />
          {/* <Route path="billing" element={<PatientBilling />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AppointmentFormProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppointmentFormProvider>
  );
};
export default App;