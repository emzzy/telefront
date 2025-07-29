import React from 'react'
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';


const PatientAppointments = ({ userType, appointments, handleClick }) => {
    return (
        <div className="bg-white mw-full h-full bg-white p-0">
            <h1 className='text-2xl font-semibold mb-6 text-gray-800'></h1>
            <table className='w-full border-collapse border-t border-b border-gray-300 hover:rounded'>
                <thead>
                    <tr className='bg-white'>
                        <th className='p-3 text-left'> Appointment ID </th>
                        <th className='p-3 text-left'> {userType === 'doctor' ? 'Patient' : 'Doctor'} </th>
                        <th className='p-3 text-left'> Issue </th>
                        <th className='p-3 text-left'> Date </th>
                        <th className='p-3 text-left'> Status </th>
                        <th className='p-3 text-left'> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => {
                        return  <tr
                                key={index}
                                className='border-t border-gray-100 hover:bg-gray-100 hover:rounded cursor-pointer'
                                onClick={() => handleClick(appointment.appointment_id)
                                }
                            >
                                <td className='p-3'> {appointment.appointment_id} </td>
                                <td className='p-3'> {userType === 'doctor' ? appointment.patient?.full_name : `${appointment.doctor}`} </td>
                                <td className='p-3'> {appointment.issues} </td>
                                <td className='p-3'>
                                    {new Date(appointment.appointment_date).toLocaleDateString()}
                                </td>
                                <td className='p-3'>
                                    <span
                                        className={`px-2 py-1 rounded text-white ${
                                            appointment.status === 'Completed'
                                            ? 'bg-green-500'
                                            : appointment.status === 'Scheduled'
                                            ? 'bg-yellow-400'
                                            : 'bg-gray-500'
                                        }`}
                                    >
                                        {appointment.status}
                                    </span>
                                </td>
                                <td className='flex p-3 items-center '>
                                    <FaEye size={19} className='mr-3 bg-gray-200 hover:bg-gray-200'/>
                                    <button className='px-4 py-2 border border-gray-300 bg-red-300 hover:bg-red-500 rounded'>
                                        Cancel Appointment 
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default PatientAppointments;