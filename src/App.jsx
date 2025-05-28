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
import BookAppointment from "./pages/BookAppointment";
import "./styles/global.css";
import Checkout from "./pages/Checkout";
import { AppointmentFormProvider } from "./context/AppointmentFormContext";
import { AppointmentProvider } from "./context/AppointmentContext";
import PaymentSuccess from "./pages/PaymentSuccess";
import Message from "./components/Message";


function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

// function RegisterAndLogout() {
//   localStorage.clear()
//   return <Register />
// }

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   if (query.get("success")){
  //     setMessage("Order placed! You will receive an email confirmation.")
  //   }
  //   if (query.get("canceled")){
  //     setMessage(
  //       "Order canceled -- continue to shop around and checkout when you're ready."
  //     );
  //   }
  // }, []);

  return (
    <>
      <AppointmentFormProvider>
        <AppointmentProvider>
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
              <Route path="/service/:serviceId" element={<ServiceDetail />} />
              <Route path="/book-appointment/:serviceId/:doctorId" element={<BookAppointment />} />
              <Route path="/checkout/:billingId" element={<Checkout />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AppointmentProvider>
      </AppointmentFormProvider>
    </>
  );
}

export default App;
