// import RegisterForm from "../components/RegisterForm";
import RegisterAsHealthcareProvider from "../components/RegisterAsHealthcareProvider";
import RegisterAsPatient from "../components/RegisterAsPatient";
import { useEffect, useState } from "react";

function Register() {
  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("userRole"); // retrieve role from localStorage

    if (userRole) {
      setAccountType(
        userRole === "patient" ? "Patient" : "Healthcare Provider"
      );
    }
  }, []);
  return (
    <>
      <div className="mb-6">
        <div className="mb-16">
          <h1 className="text-center text-3xl font-semibold text-tele-blue mb-4">
            Create Account
          </h1>
          <h3 className="text-center text-xl font-semibold mb-2">
            Register as a {accountType}
          </h3>
        </div>
        {accountType === "Healthcare Provider" ? (
          <RegisterAsHealthcareProvider />
        ) : (
          <RegisterAsPatient />
        )}
        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-tele-blue">
              Login
            </a>
          </p>
        </div>
        <div>
          <p className="text-center text-gray-700 mt-3">
            By joining, you agree to our{" "}
            <span className="font-semibold">Terms & Conditions</span> and{" "}
            <span className="font-semibold">Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );

  //   return <RegisterForm route="/api/user/signup/" method="register" />;
}

export default Register;
