// src/hooks/useLogout.js
import { useCallback } from 'react';

export const useLogout = () => {
    const logout = useCallback(() => {
        // Clear all auth-related data from localStorage
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('REFRESH_TOKEN');
        localStorage.removeItem('userRole');
        
        // You can add more cleanup here if needed
        // For example, clearing other user-specific data
        
        // Redirect to login page
        window.location.href = '/login';
    }, []);

    return { logout };
};