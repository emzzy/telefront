import React from 'react';
import { useNavigate } from 'react-router-dom';


function SelectRole() {
    const navigate = useNavigate();
    
    const handleSelectRole = (role) => {
        localStorage.setItem('userRole', role);
        navigate('/register');
    }
    return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
        <h1 className='text-3xl font-bold text-gray700 mb-6'>Select Your Role</h1>
        <fieldset className='space-y-4'>
            <form>
                <button
                    onClick={() => handleSelectRole('patient')}
                    className='px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
                >
                    Sign up as Patient
                </button>
            </form>
            <form>
                <button
                    onClick={() => handleSelectRole('medical_professional')}
                >
                    Sign up as Medical Professional
                </button>
            </form>
        </fieldset>
    </div>
    )
}
export default SelectRole