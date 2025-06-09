import React from 'react'
import { useLocation } from 'react-router-dom'


const DoctorDetails = () => {
    const location = useLocation();
    const { doctor } = location.state || {};
    return (
        <div>
            <h1>Doctor details</h1>
            {doctor ? (
                <>
                    <h2>
                        {doctor.title} {doctor.first_name} {doctor.last_name}
                    </h2>
                    <p>Location: {doctor.location}</p>
                    <div>
                        {doctor.image}
                    </div>
                </>
            ) : (
                <p>No doctor data found!</p>
            )}
        </div>
    )
}

export default DoctorDetails;