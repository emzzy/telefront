import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import { getPatientAppointmentDetail } from '../../api/fetchData';


const PatientAppointmentDetail = () => {
    const { appointmentId } = useParams();
    const { data: appointmentDetail, isError, isLoading } = useQuery({
        queryKey: ['appointmentDetail', appointmentId],
        queryFn: () => getPatientAppointmentDetail(appointmentId),
    });

    if (!appointmentDetail) return <div> Loading data..... </div>

    return (
        <div>
            <fieldset className='border border-gray-300 p-4 rounded mb-6'>
                <strong> Patient </strong> {appointmentDetail.patient.full_name}
                <strong> Issue </strong> {appointmentDetail.issue}
                <strong> Date </strong> {appointmentDetail.appointment_date}
                <strong> Status </strong> {appointmentDetail.status}
            
                <strong> Appointment ID </strong> {appointment.appointment_id}
                <strong> Action </strong>
                <div className='mt-2 flex gap-4'>
                    <button 
                        className='px-4 py-2 border border-gray-300 bg-red-200 hover:bg-red-400 font-semibold rounded'
                        onClick={() => { 
                            cancelAppointment(appointmentDetail.appointment_id)
                            setButtonAction(true);
                        }}
                        disabled={buttonAction}
                    >
                        Cancel Appointment
                    </button>
                    <button
                        className='px-4 py-2 border border-gray-300 bg-green-200 hover:bg-green-400 font-semibold rounded'
                        onClick={() => {
                            completeAppointment(appointmentDetail.appointment_id)
                            setButtonAction(true);
                        }}
                        disabled={buttonAction}
                    >
                            Complete Appointment
                    </button>
                </div>
            </fieldset>
        </div>
    );
};
export default PatientAppointmentDetail;