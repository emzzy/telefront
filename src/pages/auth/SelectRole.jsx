import React from "react";
import { useNavigate } from "react-router-dom";

function SelectRole() {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    localStorage.setItem("userRole", role);
    navigate("/Register");
  };
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-lg lg:max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-tele-blue mb-1">Why Join Us</h1>
      <h3 className="text-xl font-semibold mb-4">Expert Care Anytime, Anywhere</h3>
      <p className="mb-6">
        Acess top-notch medical advice and consultation without the need for an
        in-person visit.
      </p>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => handleSelectRole("patient")}
          className="w-full px-6 py-3 border-2 border-gray-300 font-semibold rounded-lg hover:border-tele-blue-dark hover:text-white hover:bg-tele-blue-dark transition duration-300"
        >
          Sign up as Patient
        </button>

        <button
          type="button"
          onClick={() => handleSelectRole("medical_professional")}
          className="w-full px-6 py-3 border-2 border-gray-300 font-semibold rounded-lg hover:border-tele-blue-dark hover:text-white  hover:bg-tele-blue-dark transition duration-300"
        >
          Sign up as Medical Professional
        </button>
      </div>
    </div>
    </>
  );
}
export default SelectRole;
