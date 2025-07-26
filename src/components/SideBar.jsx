import React from 'react';
import { FaBars, FaCog, FaHome, FaSignOutAlt, FaUserAlt, FaEdit, FaCalendarAlt } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';


const SideBar = ({ userData, userType }) => {
    const { logout } = useLogout();
    if (!userData || !userData.user) {
        return <div className='p-4'>Loading Sidebar....</div>
    }

    // Get user ID based on role
    const getUserId = () => {
        if (userType === 'doctor') {
            return userData.medical_license || userData.id || 'N/A';
        }
        return userData.id || 'N/A';
    };

    // Get role-specific menu items
    const getMenuItems = () => {
        const commonItems = [
            {
                icon: <FaHome />,
                label: 'Dashboard',
                link: userType === 'doctor' ? '/dashboard' : '/patient/dashboard'
            },
            {
                icon: <FaCalendarAlt size={20} />,
                label: 'Appointments',
                link: userType === 'doctor' ? '/appointments' : '/patient/dashboard'
            },
            {
                icon: <IoIosNotifications size={21} />,
                label: 'Notifications',
                link: userType === 'doctor' ? '/notifications' : '/patient/notifications'
            },
            {
                icon: <FaEdit size={20} />,
                label: 'Edit Profile',
                link: userType === 'doctor' ? '/edit-profile' : '/patient/edit-profile'
            }
        ];

        const doctorSpecificItems = [
            {
                icon: <MdOutlinePayment size={20} />,
                label: 'Payments',
                link: '/payments'
            },
        ];

        const patientSpecificItems = [
            {
                icon: <MdOutlinePayment size={20} />,
                label: 'Billing',
                link: '/billing'
            },
        ];

        // Combine common items with role-specific items
        const roleSpecificItems = userType === 'doctor' ? doctorSpecificItems : patientSpecificItems;
        
        return [
            ...commonItems.slice(0, 1), // Dashboard first
            ...roleSpecificItems,       // Role-specific items
            ...commonItems.slice(1)     // Rest of common items
        ];
    };

    const handleLogout = () => {
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('REFRESH_TOKEN');
        localStorage.removeItem('userRole');
        window.location.href = '/login';
    };

    return (
        <>
            <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r dark:text-white dark:border-gray-600 dark:bg-gray-900'>
                <div className='flex justify-between items-center p-4'>
                    <img
                        className='w-12 h-12 rounded-full'
                        src={`http://localhost:8000${userData.image}`}
                        alt={`${userData.user.first_name} ${userData.user.last_name}`}
                        onError={(e) => {
                            e.target.src = '/default-avatar.png'; // Fallback image
                        }}
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-bold md:block'> 
                            {userData.user.first_name} {userData.user.last_name} 
                        </h2>
                        <span className='text-sm text-gray-500'> 
                            {userType === 'doctor' ? `Doctor ID: ${getUserId()}` : `Patient ID: ${getUserId()}`}
                        </span>
                    </div>
                    <div className='block md:hidden'>
                        <FaBars />
                    </div>
                </div>
                
                <ul className='flex flex-col mt-5 text-xl'>
                    {getMenuItems().map((item, index) => (
                        <li key={index} className="flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600">
                            <Link to={item.link} className='flex items-center w-full'>
                                {item.icon}
                                <span className='ml-4 block md:block'>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                    
                    {/* Logout item */}
                    <li className='flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600'>
                        <button onClick={logout} className='flex items-center w-full text-left'>
                            <FaSignOutAlt size={20} />
                            <span className='ml-4 block md:block'>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideBar;