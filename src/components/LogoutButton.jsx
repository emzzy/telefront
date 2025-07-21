// src/components/LogoutButton.jsx
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useLogout } from '../hooks/useLogout';

const LogoutButton = ({
    className = '',
    showIcon = true,
    showText = true,
    iconSize = 20,
    variant = 'default' // 'default', 'sidebar', 'navbar', 'button'
}) => {
    const { logout } = useLogout();

    // Different styling variants
    const getVariantClasses = () => {
        switch (variant) {
            case 'sidebar':
                return 'flex items-center py-3 px-2 space-x-4 hover:bg-gray-300 hover:rounded cursor-pointer dark:hover:bg-gray-600 w-full text-left';
            case 'navbar':
                return 'flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors';
            case 'button':
                return 'flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors';
            default:
                return 'flex items-center space-x-2 cursor-pointer';
        }
    };

    return (
        <button 
            onClick={logout}
            className={`${getVariantClasses()} ${className}`}
        >
            {showIcon && <FaSignOutAlt size={iconSize} />}
            {showText && <span className={variant === 'sidebar' ? 'ml-4 block md:block' : ''}>Logout</span>}
        </button>
    );
};

export default LogoutButton;