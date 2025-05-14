import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import api from '../api';


const BookAppointment = () => {
  const { state } = useLocation();
  const { serviceId, doctorId } = useParams();
  const [service, setService] = useState();
  const navigate = useNavigate();
  console.log(serviceId)

  return (
    <div className=''>
      <div className='Doctor-panel'>       
        <img
          src={`http://localhost:8000${state?.doctorImage}`}
          alt="Doctor Image"
        />
        <h2>Dr. {state.doctorFirstName} {state.doctorLastName} </h2>
        <p> {state.doctorBio} </p>
      </div>
      <div>
        <h1> Book Appointment </h1>
        <form action=""></form>
          <fieldset>
            <div className='Field'>
              <label>
                Full name <sup>*</sup>
              </label>
              <input
                id='fullName'
                type="text"
                placeholder='John Doe'
              />
            </div>
            <div className='Field'>
              <label>
                email <sup>*</sup>
              </label>
              <input 
                id='email'
                type="email"
                placeholder='example@mail.com'
                
              />
            </div>
            <div className='Field'>
              <label>
                Mobile Number <sup>*</sup>
              </label>
              <input 
                id='phone'
                type="number"
                placeholder='+123456789'                
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
                type="date"
                
              />
            </div>
            <div className='Field'>
              <label>
                Address <sup>*</sup>
              </label>
              <input 
                id='address'
                type="text"
                placeholder='123 Street Address'
              />
            </div>
            <div className='Field'>
              <label>
                Issues
              </label>
              <input 
                id='issues'
                type="text"                
              />
            </div>
            <button type="submit">
              Book Appointment
            </button>
          </fieldset>
      </div>
    </div>

  )
}

export default BookAppointment;