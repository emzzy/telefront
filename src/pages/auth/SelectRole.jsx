import React from 'react';
import { useNavigate } from 'react-router-dom';


function SelectRole() {
    const navigate = useNavigate();
    
    const handleSelectRole = (role) => {
        localStorage.setItem('userRole', role);
        navigate('/register');
    }
    return (
    <div>
        <h1>Select Your Role</h1>
        <form>
            <button 
                onClick={() => handleSelectRole('patient')}
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
    </div>
    )
}
export default SelectRole