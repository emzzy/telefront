import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppointmentContext } from '../context/AppointmentContext';
import api from '../api';
import { useAppointmentForm } from '../context/AppointmentFormContext';

function BookAppointment() {
  const { serviceId, doctorId } = useParams();
  // const [service, setService] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { serviceDetails, doctorDetails } = useAppointmentContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    location: "",
    issues: "",
    symptoms: ""
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      dateOfBirth: "",
      location: "",
      issues: "",
      symptoms: ""
    });
  };
  const { setFormData: seFormContext } = useAppointmentForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phone,
      gender: formData.gender,
      location: formData.location,
      date_of_birth: formData.dateOfBirth,
      issues: formData.issues,
      symptoms: formData.symptoms
    };
    try {
      const res = await api.post(`/base/book-appointment/${serviceId}/${doctorId}/`, userData);
      const billingId = res.data.billing_id

      if (res.status === 200 || res.status === 201) {
        seFormContext(userData);
        alert('Appointment submitted!');
        clearForm();
        navigate(`/checkout/${billingId}/`);
      }
    } catch (error) {
      const errors = error.response?.data || 'Failed to book appointment. Please try again.';
      console.error('Server response:', errors);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className=''>
      <div className='Doctor-panel'>
        <img
          src={`http://localhost:8000${doctorDetails?.medicalprofessional.image}`}
          alt="Doctor Image"
        />
        <h1>Service: {serviceDetails?.name} </h1>
        <h2>Dr. {doctorDetails?.first_name} {doctorDetails?.last_name} </h2>
        <p> Doctor Bio - {doctorDetails?.medicalprofessional.bio} </p>
      </div>
      <div>
        <h1> Book Appointment </h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className='Field'>
              <label>
                First name <sup>*</sup>
              </label>
              <input
                id='firstName'
                name='firstName'
                type="text"
                placeholder='John'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='Field'>
              <label>
                Last name <sup>*</sup>
              </label>
              <input
                id='lastName'
                name='lastName'
                type="text"
                placeholder='Doe'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='Field'>
              <label>
                email <sup>*</sup>
              </label>
              <input
                id='email'
                name='email'
                type="email"
                placeholder='example@mail.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='Field'>
              <label>
                Mobile Number <sup>*</sup>
              </label>
              <input
                id='phone'
                name='phone'
                type="number"
                placeholder='+123456789'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className='Field'>
              <label>
                Gender <sup>*</sup>
              </label>
              <select
                id="gender"
                name="gender"
                type="text"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="Select Gender">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='Field'>
              <label>
                Date of Birth <sup>*</sup>
              </label>
              <input
                id='dateOfBirth'
                name='dateOfBirth'
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className='Field'>
              <label>
                Location <sup>*</sup>
              </label>
              <input
                id='location'
                name='location'
                type="text"
                placeholder='123 Street Address'
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className='Field'>
              <label>
                Issues
              </label>
              <input
                id='issues'
                name='issues'
                type="text"
                value={formData.issues}
                onChange={handleChange}
              />
            </div>
            <div className='Field'>
              <label>
                Symptoms
              </label>
              <input
                id='symptoms'
                name='symptoms'
                type="text"
                value={formData.symptoms}
                onChange={handleChange}
              />
            </div>
            <button type="submit" disabled={loading}>
              Book Appointment
            </button>
          </fieldset>
        </form>
      </div>
    </div>

  )
}

export default BookAppointment;