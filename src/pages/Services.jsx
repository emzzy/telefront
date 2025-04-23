import React from 'react'
import { TbFirstAidKit, TbUserHeart, TbVideo , TbCalendarDot, TbEmergencyBed } from 'react-icons/tb';
import '../styles/Services.css'
import { useNavigate } from "react-router-dom";


function Services () {
    const services = [
        {
            icon: <TbUserHeart />,
            title: "Search Doctor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla"
        },
        {
            icon: <TbVideo />,
            title: "Video Consultation",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla"
        },
        {
            icon: <TbCalendarDot />,
            title: "Appointment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla"
        },
        {
            icon: <TbEmergencyBed />,
            title: "Emergency Alerts",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla"
        },
        {
            icon: <TbFirstAidKit />,
            title: "First Aid Guidance",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla"
        },
    ];
    const handleClick = (link) => {
        window.location.href = link;
    };
    
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-list">
                {services.map((service, index) => (
                    <div
                        className="service-card" 
                        key={index}
                        onClick={() => handleClick(service.link)}
                        role='button'
                        style={{ cursor: "pointer" }}
                    >
                        <div className="icon"> {service.icon} </div>
                        <h3> {service.title} </h3>
                        <p> {service.description} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services