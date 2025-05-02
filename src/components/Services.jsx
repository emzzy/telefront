import React, { useEffect, useState } from 'react'
import { TbFirstAidKit, TbUserHeart, TbVideo , TbCalendarDot, TbEmergencyBed } from 'react-icons/tb';
import '../styles/Services.css'
import api from '../api';
import orthopedicsImg from "../assets/images/orthopedics.jpg";
import bookAppointmentImg from "../assets/images/book-appointment.jpg";
import dermatologyImg from "../assets/images/dermatology.jpg";
import optometryImg from "../assets/images/optometry.png";
import searchDoctorImg from "../assets/images/search-doctor.png";
import videoConsultImg from "../assets/images/video-consultation.jpeg";
import { useNavigate } from 'react-router-dom';


const ServicesComponent = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getServices();
    }, []);
    const serviceImages = {
        'orthopedics.png': orthopedicsImg,
        'book-appointment.jpg': bookAppointmentImg,
        'dermatology.jpg': dermatologyImg,
        'optometry.png': optometryImg,
        'search-doctor.png': searchDoctorImg,
        'video-consultation.jpeg': videoConsultImg,
    };
    const getServices = () => {
        api
            .get('base/services/')
            .then((res) => res.data)
            .then((data) => {
                setServices(data);
                console.log(data)
            })
            .catch((err) => alert(err));
    };
    const handleClick = (serviceId) => {
        navigate(`/service/${serviceId}`);
    };
    
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p>Lorem ipsum sit amet consecteur adpisicing elit. Debitis, reiciendis</p>
            <div className="services-list">
                {services.map((service) => (
                    <div
                        className="service-card"
                        key={service.id}
                        onClick={() => handleClick(service.id)}
                        role="button"
                        style={{ cursor: "pointer" }}
                    >
                        <div className='service-image'> 
                            <img
                                src={serviceImages[service.image]}
                                alt={service.title}
                                className='service-image'
                            />
                        </div>
                        {/* <div className="icon"> {service.icon} </div> */}
                        <h3> {service.name} </h3>
                        <p> {service.description} </p>
                        <h4>Available Doctors: {service.doctor_count} </h4>
                        <h3> £{service.cost} </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesComponent