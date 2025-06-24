import React, { useRef, useState } from 'react'
import { cancelAppointment, completeAppointment, getAppointments } from '../api/fetchData';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import MedicalReportModal from '../components/MedicalReportModal';
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import AddLabReportModal from '../components/AddLabReportModal';
import EditLabReportModal from '../components/EditLabReportModal';


const Appointment = () => {
    const { appointmentId } = useParams();
    const { data: appointmentDetail, isError, isLoading } = useQuery({
        queryKey: ['appointmentDetail', appointmentId],
        queryFn: () => getAppointments(appointmentId),
    });

    const queryClient = useQueryClient();

    const handleMedicalReportSaved = () => {
        queryClient.invalidateQueries(['appointmentDetail', appointmentId]);
        setShowMedicalReportModal(false);
    };
    const handleLabReportSaved = () => {
        queryClient.invalidateQueries(['appointmentDetail', appointmentId]);
        setShowLabReportModal(false);
    };

    const [buttonAction, setButtonAction] = useState(false);
    const [showMedicalReportModal, setShowMedicalReportModal] = useState(false);
    const [showLabReportModal, setShowLabReportModal] = useState(false);
    const [editLabTestData, setEditLabTestData] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
        
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
                    <div className='mt-2 flex gap-4'>
                        <button 
                            className='px-4 py-2 border border-gray-300 bg-red-200 hover:bg-red-400 font-semibold rounded'
                            onClick={() => { 
                                cancelAppointment(appointment.appointment_id)
                                setButtonAction(true);
                            }}
                            disabled={buttonAction}
                        >
                            Cancel Appointment
                        </button>
                        <button
                            className='px-4 py-2 border border-gray-300 bg-green-200 hover:bg-green-400 font-semibold rounded'
                            onClick={() => {
                                completeAppointment(appointment.appointment_id)
                                setButtonAction(true);
                            }}
                            disabled={buttonAction}
                        >
                                Complete Appointment
                        </button>
                    </div>
                </p>
            </fieldset>
            
            <div>
                <h1 className='text-2xl font-semibold mb-4'> Medical Reports </h1>
                <button
                    className='flex items-center gap-2 px-4 py-2 border-gray-300 bg-blue-200 hover:bg-blue-400 text-white rounded'
                    onClick={() => setShowMedicalReportModal(true)}
                >
                    Add Medical Report <IoMdAdd className='w-5 h-5' />
                </button>
                <MedicalReportModal
                    showMedicalReportModal={showMedicalReportModal}
                    closeModal={() => setShowMedicalReportModal(false)}
                    onSuccess={handleMedicalReportSaved}
                />
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
                <button
                    className='flex items-center gap-2 px-4 py-2 border-gray-300 bg-blue-200 hover:bg-blue-400 text-white rounded'
                    onClick={() => setShowLabReportModal(true)}
                >
                    <span> Add Lab Test </span> <IoMdAdd className='w-5 h-5' />
                </button>
                <AddLabReportModal
                    showLabReportModal={showLabReportModal}
                    closeModal={() => setShowLabReportModal(false)}
                    onSuccess={handleLabReportSaved}
                />
                {lab_tests && lab_tests.length > 0 ? (
                    lab_tests.map((record, index) => (
                        <div key={index} className='mt-4 border p-4 rounded shadow-sm'>
                            <p> <strong> Test Name: </strong> {record.test_name} </p>
                            <p> <strong> Description: </strong> {record.description} </p>
                            <p> <strong> Result: </strong> {record.result} </p>
                            <button
                                className='flex items-center gap-2 px-4 py-2 border border-gray-300 bg-blue-200 hover:bg-blue-400 text-white rounded'
                                onClick={() => {
                                    setEditLabTestData(record); 
                                    setShowEditModal(true);
                                }}
                            >
                                <span>Edit</span> <FaEdit className='w-5 h-5' />
                            </button>                            
                        </div>
                    ))
                ) : (
                    <p className='mt-2'> No lab result yet. </p>
                )}

                {showEditModal && editLabTestData && (
                    <EditLabReportModal
                        showModal={showEditModal}
                        closeModal={() => setShowEditModal(false)}
                        appointmentId={appointmentId}
                        labTest={editLabTestData}
                        onSuccess={handleLabReportSaved}
                    />
                )}
            </div>
            
            <div>
                <h1 className='text-2xl font-semibold mb-4'> Prescription </h1>
            </div>
        </div>
    )
};
export default Appointment;