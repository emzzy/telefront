import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { cancelDoctorAppointment, completeDoctorAppointment, getPatientAppointmentDetail } from '../../api/fetchData';
import moment from 'moment';


const PatientAppointmentDetail = () => {
    const { appointmentId } = useParams();
    const { data: appointmentDetail, isError, isLoading } = useQuery({
        queryKey: ['appointmentDetail', appointmentId],
        queryFn: () => getPatientAppointmentDetail(appointmentId),
    });
    const [buttonAction, setButtonAction] = useState(false);

    if (!appointmentDetail) return <div> Loading data..... </div>

    const { appointment, medical_records, lab_tests, prescription } = appointmentDetail;

    return (
        <div>
            <fieldset className='border border-gray-300 p-4 rounded mb-6'>
                <strong> Appointment ID </strong> {appointment.appointment_id}
                <strong> Service </strong> {appointment.service}
                <strong> Patient </strong> {appointment.patient}
                <strong> Issue </strong> {appointment.issues}
                <strong> Symptoms </strong> {appointment.issues}
                <strong> Status </strong> {appointment.status}
                <strong> Date </strong> {moment(appointment.appointment_date).format('DD MMM YYYY, hh:mm A')}
                <div className='mt-2 flex gap-4'>
                    <button 
                        className='px-4 py-2 border border-gray-300 bg-red-200 hover:bg-red-400 font-semibold rounded'
                        onClick={() => { 
                            cancelDoctorAppointment(appointment.appointment_id)
                            setButtonAction(true);
                        }}
                        disabled={buttonAction}
                    >
                        Cancel Appointment
                    </button>
                    <button
                        className='px-4 py-2 border border-gray-300 bg-green-200 hover:bg-green-400 font-semibold rounded'
                        onClick={() => {
                            completeDoctorAppointment(appointment.appointment_id)
                            setButtonAction(true);
                        }}
                        disabled={buttonAction}
                    >
                            Complete Appointment
                    </button>
                </div>
            </fieldset>
            <div>
                <h1 className='text-2xl font-semibold mb-4'> Medical Reports </h1>
                {medical_records && medical_records.length > 0 ? (
                    medical_records.map((record, index) => (
                        <div key={index} className='mt-4 border p-4 rounded shadow-sm'>
                            <p> <strong> Diagnosis: </strong> {record.diagnosis} </p>
                            <p> <strong> Treatment: </strong> {record.treatment} </p>
                            <button
                                className='flex items-center gap-2 px-4 py-2 border border-gray-300 bg-blue-200 hover:bg-blue-400 text-white rounded'
                            >
                                <span>Edit</span> <FaEdit className='w-5 h-5' />
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='mt-2'> No medical records yet. </p>
                )}
            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-4'> Lab Test Reports </h1>
                {lab_tests && lab_tests.length > 0 ? (
                    lab_tests.map((record, index) => (
                        <div key={index} className='mt-4 border p-4 rounded shadow-sm'>
                            <p> <strong> Test Name: </strong> {record.test_name} </p>
                            <p> <strong> Description: </strong> {record.description} </p>
                            <p> <strong> Result: </strong> {record.result} </p>                      
                        </div>
                    ))
                ) : (
                    <p className='mt-2'> No lab result yet. </p>
                )}
            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-3'> Prescription </h1>
                {prescription && prescription.length > 0 ? (
                    prescription.map((record, index) => (
                        <div key={index} className='mt-4 border p-4 rounded shadow-sm'>
                            <p> <strong> Test Name: </strong> {record.test_name} </p>
                            <p> <strong> Description: </strong> {record.description} </p>
                            <p> <strong> Result: </strong> {record.result} </p>
                        </div>
                    ))
                ) : (
                    <p className='mt-2'> No prescription yet. </p>
                )}
            </div>
        </div>
    );
};
export default PatientAppointmentDetail;