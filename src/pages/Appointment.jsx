import React from 'react'
import { getAppointments } from '../api/fetchData';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';


const Appointment = () => {
    const { appointmentId } = useParams();
    const { data: appointmentDetail, isError, isLoading } = useQuery({
        queryKey: ['appointmentDetail', appointmentId],
        queryFn: () => getAppointments(appointmentId),
    });

    if (!appointmentDetail) return <div> Loading.... </div>;

    const { appointment, medical_records, lab_tests, prescription } = appointmentDetail;

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-semibold mb-4'> Appointment Detail </h1>
            <fieldset className='border border-gray-300 p-4 rounded mb-6'>
                <p> <strong> Appointment ID </strong> {appointment.appointment_id} </p>
                <p> <strong> Patient </strong> {appointment.patient.full_name} </p>
                <p> <strong> Issue </strong> {appointment.issue} </p>
                <p> <strong> Date </strong> {appointment.appointment_date} </p>
                <p> <strong> Status </strong> {appointment.status} </p>
                <p>
                    <strong> Action </strong>
                    <button className='px-4 py-2 border border-gray-300 bg-red-200 hover:bg-red-400 font-semibold rounded'> Cancel Appointment </button> 
                    <button className='px-4 py-2 border border-gray-300 bg-green-200 hover:bg-green-400 font-semibold rounded'> Complete Appointment </button> 
                </p>
            </fieldset>
                        
            <div>
                <h1 className='text-2xl font-semibold mb-4'> Medical Reports </h1>
                <label for='options' class='block mb-2 text-sm font-medium text-gray-700'>
                    
                </label>
            </div>
            <div> 
                <h1 className='text-2xl font-semibold mb-4'> Lab Test Reports </h1>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-4'> Prescription </h1>
            </div>
        </div>
    )
};
export default Appointment;