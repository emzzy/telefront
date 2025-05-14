import React, { createContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api'


const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState(null);
    const navigate = useNavigate();
    const UserContext = createContext;
    
    useEffect(() => {
        api.get(`base/service/${serviceId}`)
        .then((res) => setService(res.data))
        .catch((err) => console.error(err));
    }, [serviceId]);

    const handleClick = (serviceId, doctor) => {
        navigate(`/book-appointment/${service.id}/${doctor.id}`, {
        });
        console.log(`Doctor id: ${doctor.id}`)
    };

    if (!service) return <p>Loading..............</p>
    // console.log(`The service detail is ${service.available_doctors.id}`)
    return (
        <div className='max-w-5xl mx-auto py-10'>
            <h3 className='text-3xl font-bold text-blue-900 mb-2'>Service Detail</h3>
            <div className='service-name'>
                <h1> Service id: {service.id} - {service.name} </h1>
                <p> {service.description} </p>
            </div>
            <div className='service-image'>
                <img
                    src={`http://localhost:8000${service.image}`}
                    alt={service.name}
                />
            </div>
            <h2 className='text-3xl font-bold text-blue-900 mb-2'>
                Available Doctors
            </h2>
            <p className='text-gray-600 mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis.
            </p>
            <div className='space-y-6'>
                {service.available_doctors.map((doctor) => (
                    doctor.medicalprofessional ? (
                        <div
                            key={doctor.id}
                            className='flex items-center justify-between bg-white shadow-md rounded-lg p-6'
                        >
                            <div className='flex items-center space-x-4'>
                                <img
                                    src={`http://localhost:8000${doctor.medicalprofessional.image}`}
                                    alt="doctorImage"
                                    className='w-20 h-20 object-cover rounded-full'
                                />
                            </div>
                            <h3 className='text-xl font-semibold'>
                                {doctor.first_name} {doctor.last_name}
                            </h3>
                            <p className='text-sm text-gray-700'>
                                <span className='font-medium'> Time Available: </span>{' '}
                                {new Date(doctor.medicalprofessional.available_appointment_date).toLocaleString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </p>
                            <p className='text-sm text-gray-700'>
                                <span className='font-medium'>Price: </span> ${service.cost}
                            </p>
                            <button
                                onClick={() => handleClick(service.id, doctor)}
                                className='bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition duration-300'
                            >
                                Book Now
                            </button>
                        </div>
                    ) : null
                ))}
            </div>
            {/* <div className='available-doctors'>
                <div className='service-doctor'>
                    {service.available_doctors}
                </div>
            </div> */}
        </div>
    )
}
export default ServiceDetail;