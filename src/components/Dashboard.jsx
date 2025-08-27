// import React, { useEffect, useState } from 'react'
// import SideBar from './SideBar';
// import DashboardNavbar from './DashboardNavbar';
// import Card from './Card';
// import { FaCalendarAlt,  } from 'react-icons/fa';
// import { IoIosNotifications } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
// import { FaEye } from "react-icons/fa";
// import { useQuery } from '@tanstack/react-query';
// import { Outlet, useNavigate } from 'react-router-dom';
// import PatientAppointments from '../pages/patient/PatientAppointments';


// const Dashboard = ({ userType, userData, appointments, notifications, totalSpent }) => {
//     const navigate = useNavigate();

//     if (!userData) {
//         return <div className='p-6'>Loading dashboard....</div>
//     }
//     const handleClick = (appointmentId) => {
//         if (userType === 'doctor') {
//             navigate(`/appointment/${appointmentId}/`, {});
//         }
//         else if (userType === 'patient') {
//             navigate(`/patient/appointment/${appointmentId}/detail`);
//         }
//     };
//     const totalAppointments = appointments.length || 0;
//     const totalNotifications = notifications.length || 0;
    
//     return (
//         <div className='flex'>
//             <SideBar userData={userData} userType={userType} />
//             <div className='bg-white grow ml-16 md:ml-64 h-full lg:h-screen bg-white text-black'>
//                 {/* <DashboardNavbar userData={userData} userType={userType} /> */}
                
//                 <div className='grow p-7 bg-white'>
//                     {/* <h2> Dashboard </h2> */}
                    
//                     <div className='flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mb-6'>
//                         <div className="w-full">
//                             <Card icon={<FaCalendarAlt />} title="Appointments" value={totalAppointments} />
//                         </div>
//                         <div className="w-full">
//                             <Card icon={<IoIosNotifications />} title="Notifications" value={totalNotifications} />
//                         </div>
//                         <div className="w-full">
//                             <Card icon={<IoIosNotifications />} title="Total Spent" value={`£${totalSpent}`} />
//                         </div>
//                     </div>
//                     {/* <table className='w-full border-collapse border-t border-b border-gray-300 dark:hover:bg-gray-900 transition-colours hover:rounded'>
//                         <thead>
//                             <tr className='bg-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
//                                 <th className='p-3 text-left'> Appointment ID </th>
//                                 <th className='p-3 text-left'> {userType === 'doctor' ? 'Patient' : 'Doctor'} </th>
//                                 <th className='p-3 text-left'> Issue </th>
//                                 <th className='p-3 text-left'> Date </th>
//                                 <th className='p-3 text-left'> Status </th>
//                                 <th className='p-3 text-left'> Action </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {appointments.map((appointment, index) => {
//                                 return  <tr
//                                             key={index}
//                                             className='border-t border-gray-300 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600
//                                             dark:hover:rounded'
//                                             onClick={() => handleClick(appointment.appointment_id)
//                                             }
//                                         >
//                                             <td className='p-3'> {appointment.appointment_id} </td>
//                                             <td className='p-3'> {userType === 'doctor' ? appointment.patient?.full_name : `${appointment.doctor}`} </td>
//                                             <td className='p-3'> {appointment.issues} </td>
//                                             <td className='p-3'>
//                                                 {new Date(appointment.appointment_date).toLocaleDateString()}
//                                             </td>
//                                             <td className='p-3'>
//                                                 <span
//                                                     className={`px-2 py-1 rounded text-white ${
//                                                         appointment.status === 'Completed'
//                                                         ? 'bg-green-500'
//                                                         : appointment.status === 'Scheduled'
//                                                         ? 'bg-yellow-400'
//                                                         : 'bg-gray-500'
//                                                     }`}
//                                                 >
//                                                     {appointment.status}
//                                                 </span>
//                                             </td>
//                                             <td className='flex p-3 items-center '>
//                                                 <FaEye size={19} className='mr-3 bg-gray-200 hover:bg-gray-400'/>
//                                                 <button className='px-4 py-2 border border-gray-300 bg-red-300 hover:bg-red-500 rounded'>
//                                                     Cancel Appointment <MdDelete size={19}/>
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                 })
//                             }
//                         </tbody>
//                     </table> */}
//                     <PatientAppointments
//                         userType={userType}
//                         userData={userData}
//                         appointments={appointments}
//                         handleClick={handleClick}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import PatientAppointments from '../pages/patient/PatientAppointments';
import DoctorAppointments from '../pages/doctor/DoctorAppointments';
import Appointment from '../pages/Appointment';

const Dashboard = ({ userType, userData, appointments = [], notifications = [], totalSpent = 0, totalEarnings = 0 }) => {
    const navigate = useNavigate();

    if (!userData) {
    return (
        <div className="flex items-center justify-center p-6">
            <div className="text-lg">Loading dashboard...</div>
        </div>
    );
    }

    const handleAppointmentClick = (appointmentId) => {
        if (userType === 'doctor') {
            navigate(`/appointment/${appointmentId}`);
        } else if (userType === 'patient') {
            navigate(`/patient/appointment/${appointmentId}/detail`);
        }
    };

    const totalAppointments = appointments?.length || 0;
    const totalNotifications = notifications?.length || 0;

    // Get cards depending on user type
    const getCards = () => {
        const commonCards = [
        {
            icon: <FaCalendarAlt />,
            title: "Appointments",
            value: totalAppointments
        },
        {
            icon: <IoIosNotifications />,
            title: "Notifications",
            value: totalNotifications
        }
        ];

        if (userType === 'patient') {
        return [
            ...commonCards,
            {
            icon: <MdOutlinePayment />,
            title: "Total Spent",
            value: `£${totalSpent || 0}`
            }
        ];
        } else if (userType === 'doctor') {
        return [
            ...commonCards,
            {
            icon: <MdOutlinePayment />,
            title: "Total Earnings",
            value: `£${totalEarnings || 0}`
            }
        ];
        }

        return commonCards;
    };

    return (
        <div className="grow p-5 bg-white">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Welcome back, {userData?.user?.first_name}!
                </h1>
                <p className="text-gray-600">
                    {userType === 'doctor' 
                        ? 'Here\'s an overview of your practice today.' 
                        : 'Here\'s your health dashboard overview.'
                    }
                </p>
            </div>

            {/* Status Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {getCards().map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        value={card.value}
                    />
                ))}
            </div> */}
            
            <div className='flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mb-6'>
                <div className="w-full">
                    <Card icon={<FaCalendarAlt />} title="Appointments" value={totalAppointments} />
                </div>
                <div className="w-full">
                    <Card icon={<IoIosNotifications />} title="Notifications" value={totalNotifications} />
                </div>
                <div className="w-full">
                    <Card icon={<IoIosNotifications />} title="Total Spent" value={`£${totalSpent}`} />
                </div>
            </div>
            
            {/* Appointments Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Recent Appointments
                    </h2>
                </div>
                
                {userType === 'patient' ? (
                    <PatientAppointments
                        userType={userType}
                        userData={userData}
                        appointments={appointments}
                        handleClick={handleAppointmentClick}
                        showTitle={false}
                    />
                ) : (
                    <Appointment
                        // userType={userType}
                        // userData={userData}
                        appointments={appointments}
                        handleClick={handleAppointmentClick}
                        showTitle={false}
                    />
                )}
            </div>
        </div>
    );
};
export default Dashboard;