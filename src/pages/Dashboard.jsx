import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar';
import DashboardNavbar from '../components/DashboardNavbar';
import Card from '../components/Card';
import { FaCalendarAlt,  } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
// import api from '../api/api';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import { fetchDoctorData } from '../api/fetchData';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const { data: dashboardData, isError, isLoading } = useQuery({
        queryKey: ['dashboardData'],
        queryFn: fetchDoctorData,
    });
    const navigate = useNavigate();
    const handleClick = (appointmentId) => {
        navigate(`/appointment/${appointmentId}/`, {});
    };
    
    if (!dashboardData) {
        return <div> Loading........ </div>;
    }
    if (isError) return <div> Error loading dashboard data...... </div>
    const totalAppointments = dashboardData.appointments.length || 0;
    const totalNotifications = dashboardData.notifications.length || 0;

    return (
        <div className='flex'>
            <SideBar doctor={dashboardData.doctor} />
            <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
                <DashboardNavbar doctor={dashboardData.doctor} />
                
                <div className='grow p-7'>
                    <h2> Dashboard </h2>
                    
                    <div className='grid grid-cols-2 p-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6'>
                        <Card icon={<FaCalendarAlt />} title='Appointments' value={totalAppointments} />
                        <Card icon={<IoIosNotifications />} title='Notifications' value={totalNotifications} />
                    </div>

                    <table className='w-full border-collapse border-t border-b border-gray-300 dark:hover:bg-gray-900 transition-colours hover:rounded'>
                        <thead>
                            <tr className='bg-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
                                <th className='p-3 text-left'> Appointment ID </th>
                                <th className='p-3 text-left'> Patient </th>
                                <th className='p-3 text-left'> Issue </th>
                                <th className='p-3 text-left'> Date </th>
                                <th className='p-3 text-left'> Status </th>
                                <th className='p-3 text-left'> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboardData?.appointments.map((appointment, index) => {
                            return <tr
                                        key={index}
                                        className='border-t border-gray-300 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600
                                        dark:hover:rounded'
                                        onClick={() => handleClick(appointment.appointment_id)}
                                    >
                                        <td className='p-3'> {appointment.appointment_id} </td>
                                        <td className='p-3'> {appointment.patient.full_name} </td>
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
                                            <FaEye size={19} className='mr-3 bg-gray-200 hover:bg-gray-400'/>
                                            <button className='px-4 py-2 border border-gray-300 bg-red-300 hover:bg-red-500 rounded'>
                                                Cancel Appointment <MdDelete size={19}/>
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;