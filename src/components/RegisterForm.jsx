import { useEffect, useState } from "react";
import api from "../api";
import { validateEmail } from "../utils";
import { data, useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    location: "",
    dateOfBirth: "",
    role: "",
  });
  const [passwordState, setPasswordState] = useState({
    value: "",
    isTouched: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole"); // retrieve role from localStorage
    console.log(`This user is a: ${userRole}`);
    if (userRole) {
      setFormData((prev) => ({ ...prev, role: userRole }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getIsFormValid = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      gender,
      location,
      dateOfBirth,
      role,
    } = formData;
    return (
      firstName &&
      lastName &&
      validateEmail(email) &&
      password.length >= 8 &&
      phone &&
      gender &&
      location &&
      dateOfBirth &&
      role != userRole
    );
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      location: "",
      dateOfBirth: "",
      role: formData.role,
    });
  };

  const handleSubmit = async (e) => {
    if (formData.password !== formData.confirmPassword) {
      alert("passwords do not match");
      setLoading(false);
      return;
    }
    setLoading(true);
    e.preventDefault();

    const userData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirmPassword,
      phone: formData.phone,
      gender: formData.gender,
      location: formData.location,
      date_of_birth: formData.dateOfBirth,
      role: formData.role,
    };

    try {
      const res = await api.post("api/user/signup/", userData);

      if (res.status === 200 || res.status === 201) {
        alert("Account created!");
        clearForm();

        if (res.data.token) {
          localStorage.setItem("ACCESS_TOKEN", res.data.token);
        }

        navigate(formData.role === "medical_professional" ? "/" : "/login");
      }
    } catch (error) {
      const errors =
        error.response?.data || "Registration failed. Please try again";
      //alert(JSON.stringify("Registration error:", errorMessage, null, 2));
      console.error("Server reponse:", errors);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="RegisterForm">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Register</h1>
          <input type="hidden" name="role" value="" />
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label for="lastName" class="form-label">
              Last Name <sup>*</sup>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="Field">
            <label>
              Email <sup>*</sup>
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>
              Phone <sup>*</sup>
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile number"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={(e) => {
                setPasswordState({ value: e.target.value, isTouched: true });
                handleChange({
                  target: { name: "password", value: e.target.value },
                });
              }}
              placeholder="Password"
            />
            {formData.password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Confirm Password <sup>*</sup>
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          <div className="Field">
            <label>
              Gender <sup>*</sup>
            </label>
            <select
              id="gender"
              name="gender"
              type="text"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gender"
            >
              <option value="Select Gender"></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="Field">
            <label>
              Location <sup>*</sup>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>
          <div className="Field">
            <label>
              Date of Birth <sup>*</sup>
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of birth"
            />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              placeholder="User role"
              disabled
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="medical_professional">Doctor</option>
            </select>
          </div>
          <div class="text-center">
            <button type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Register"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default RegisterForm;
