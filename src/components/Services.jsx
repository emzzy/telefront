import React, { useEffect, useState } from "react";
import "../styles/Services.css";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const ServicesComponent = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getServices();
    }, []);
    const getServices = () => {
        api
        .get("base/services/")
        .then((res) => res.data)
        .then((data) => {
            setServices(data);
        })
        .catch((err) => alert(err));
    };
    const handleClick = (serviceId) => {
        navigate(`/service/${serviceId}`);
    };

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p>
                Lorem ipsum sit amet consecteur adpisicing elit. Debitis, reiciendis
            </p>
            <div className="services-list">
                {services.map((service) => (
                <div
                className="service-card"
                key={service.id}
                onClick={() => handleClick(service.id)}
                role="button"
                style={{ cursor: "pointer" }}
                >
                    {/* <div className="icon"> {service.icon} </div> */}
                    <h3> {service.name} </h3>
                    <p> {service.description} </p>
                    <h4>Available Doctors: {service.doctor_count} </h4>
                    <h3> £{service.cost} </h3>
                </div>
            ))}
        </div>
    </div>
    );
};

export default ServicesComponent;
