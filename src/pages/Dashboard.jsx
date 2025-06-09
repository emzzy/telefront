import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar';
import DashboardNavbar from '../components/DashboardNavbar';
import Card from '../components/Card';
import { FaCalendarAlt,  } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import api from '../api';


const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const totalAppointmnets = dashboardData.appointments?.length || 0;
    const totalNotifications = dashboardData.notifications?.length || 0;
    
    useEffect(() => {
        api.get('/doctor/dashboard')
        .then(res => setDashboardData(res.data))
        .catch(err => console.error('Error fetching dashboard', err));
    }, []);
    
    if (!dashboardData)
        return <div> Loading........ </div>;

    return (
        <div className='flex'>
            <SideBar doctor={dashboardData} />
            <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900'>
                <DashboardNavbar doctor={dashboardData.doctor} />
                
                <div className='grow p-7'>
                    <h2> Dashboard </h2>
                    
                    <div className='grid grid-cols-2 p-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6'>
                        <Card icon={<FaCalendarAlt />} title='Appointments' value={totalAppointmnets} />
                        <Card icon={<IoIosNotifications />} title='Notifications' value={totalNotifications} />
                    </div>

                    <table className='w-full border-collapse border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-100'>
                                <th className='border border-gray-300 p-3 text-left'> Appointment ID </th>
                                <th className='border border-gray-300 p-3 text-left'> Patient </th>
                                <th className='border border-gray-300 p-3 text-left'> Issue </th>
                                <th className='border border-gray-300 p-3 text-left'> Date </th>
                                <th className='border border-gray-300 p-3 text-left'> Status </th>
                                <th className='border border-gray-300 p-3 text-left'> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboardData?.appointments?.map((appointment, index) => {
                                    return <tr key={index} >
                                        <td className='border border-gray-300 p-3'> {appointment.appointment_id} </td>
                                        <td className='border border-gray-300 p-3'>Patient #{appointment.patient} </td>
                                        <td className='border border-gray-300 p-3'> {appointment.issues} </td>
                                        <td className='border border-gray-300 p-3'> {appointment.appointment_date} </td>
                                        <td className='border border-gray-300 p-3'> {appointment.status} </td>
                                        <td className='border border-gray-300 p-3'> {appointment.appointment_id} </td>
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