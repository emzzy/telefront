import React from 'react'
import { FaBars, FaCog, FaHome, FaSignOutAlt, FaUserAlt, FaEdit, FaCalendarAlt } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";


const SideBar = ({ doctor }) => {
    return (
        <>
            <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r dark:text-white dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
                <div className='flex justify-between items-center p-4'>
                    <img
                        className='w-12 h-12 rounded-full'
                        src={`http://localhost:8000${doctor.image}`}
                        alt={doctor.user.first_name}
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-bold md:block'> {doctor.user.first_name} {doctor.user.last_name} </h2>
                        <span className='text-sm text-gray'> Doctor ID: {doctor.medical_license} </span>
                    </div>
                    <div className='block md:hidden'>
                        <FaBars />
                    </div>
                </div>
                <ul className='flex flex-col mt-5 text-xl'>
                    <li className="flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600">
                        <FaHome/>
                        <span className='ml-4 block md:block'> Dashboard </span>
                    </li>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600'>
                        <FaCalendarAlt size={20} />
                        <span className='ml-4 block md:block'> Appointment </span>
                    </li>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600'>
                        <MdOutlinePayment size={20} />
                        <span className='ml-4 md:block'> Payments </span>
                    </li>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600'>
                        <IoIosNotifications size={20} />
                        <span className='ml-4 md:block'> Notification </span>
                    </li>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600'>
                        <FaEdit size={20} />
                        <span className='ml-4 md:block'> Edit Profile </span>
                    </li>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600'>
                        <FaSignOutAlt size={20} />
                        <span className='ml-4 md:block'> Logout </span>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default SideBar;