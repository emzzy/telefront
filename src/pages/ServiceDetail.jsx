import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'


const ServiceDetail = () => {
    const {id} = useParams();
    const [service, setService] = useState(null);
    
    useEffect(() => {
        api.get(`base/service/${id}`)
        .then((res) => setService(res.data))
        .catch((err) => console.error(err));
    }, [id]);

    if (!service) return <p>Loading..............</p>
    console.log(`The service detail is ${id}`)

    return (
        <div className='service-detail'>
            <h3>Service Detail</h3>
            <div className='service-name'>
                <h1> {service.id}: {service.name} </h1>
                <p> {service.description} </p>
            </div>
            <div className='service-image'>
                <img
                    src={`http://localhost:8000${service.image}`}
                    alt={service.name}
                />
            </div>
            <h2>Available Doctors</h2>
            {service.available_doctors.map((doctor) => (
                <div>
                    <img
                        src={`http://localhost:8000${doctor.image}`}
                        alt="doctorImage"
                    />
                    <li> {doctor.first_name} {doctor.last_name} </li>
                    <li>Available time: {doctor.available_appointment_date}</li>
                </div>
            ))}
            {/* <div className='available-doctors'>
                <div className='service-doctor'>
                    {service.available_doctors}
                </div>
            </div> */}
        </div>
    )
}
export default ServiceDetail