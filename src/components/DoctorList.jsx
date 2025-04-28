import React, { useState, useEffect } from 'react'
import api from '../api';
import { TfiLocationPin } from "react-icons/tfi";
import '../styles/DoctorList.css'
import { useNavigate } from 'react-router-dom';


const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    const handleClick = (link, doctor) => {
        navigate(link, { state: { doctor } })
    };
    
    useEffect(() => {
        getDoctors();
    }, [])

    const getDoctors = () => {
        api
            .get('api/users/all-doctors/')
            .then((res) => res.data)
            .then((data) => {
                setDoctors(data); 
                console.log(data) 
            })
            .catch((err) => alert(err));
    };

    return (
        <>
            <div className="doctors-container">
                <h1>Our Doctors</h1>
                <div className="doctors-list">
                    {doctors.map((doctors, index) => (
                        <div
                            className="doctor-card"
                            key={index}
                            onClick={() => handleClick(`/doctor/${doctors.id}`, doctors)}
                            role='button'
                            style={{ cursor: "pointer" }}
                        >
                            <div className="icon"> {doctors.image} </div>
                            <h3> 
                                {doctors.title} {doctors.first_name} {doctors.last_name} 
                            </h3>
                            <h4> 
                                <TfiLocationPin />  {doctors.location}
                            </h4>
                            <button className="doctor-button">
                                Chat
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DoctorList
