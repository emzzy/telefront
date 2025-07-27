import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchPatientData } from '../../api/fetchData';
import { formatDateForDateInput, formatDateForDisplay } from '../../utils/dateHelpers';

const EditPatientProfile = () => {
    const  { data: patientData, isLoading, isError } = useQuery({
        queryKey: ['patientData'],
        queryFn: fetchPatientData,
    });
    if (isLoading) return <div> Loading profile...</div>
    if (isError) return <div> Error Loading Profile </div>

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white border rounded-xl shadow-md p-8">                
                
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Edit profile</h2>
                    <img
                        src={`http://localhost:8000${patientData.patient.image}`}            
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                        onClick={() => document.getElementById('upload_image').click()}
                    />
                    <div className='absolute insert-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity cursor-pointer'
                        onClick={() => document.getElementById('upload_image').click()}>
                        <span className='text-white text-sm'> Change Photo </span>
                    </div>
                    <input 
                        type="file" name='image' id='upload_image' hidden required 
                        accept='image/*'
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                console.log('Selected file:', file)
                            }
                        }}
                    />
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-600 mb-1">First Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.user.first_name}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Last Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Last Name"
                            defaultValue={patientData?.patient.user.last_name}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            defaultValue={patientData?.patient.user.email}
                        />
                    </div>                    
                    <div>
                        <label className="block text-gray-600 mb-1">Contact Number</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.user.phone_number} 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Gender</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.user.gender}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Date of Birth</label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={formatDateForDateInput(patientData?.patient.user.date_of_birth)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Address</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.user.location} 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Age</label>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.age}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Emergency Contact</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.emergency_contact}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Medical Information</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.medical_information} 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Blood Group</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.blood_group} 
                        />
                    </div>                    
                    <div className="sm:col-span-2">
                        <label className="block text-gray-600 mb-1">Bio</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={patientData?.patient.bio}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-gray-600 mb-1">Available Appointment Date</label>
                        <input
                            type="datetime-local"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={formatDateForDateInput(patientData?.patient.available_appointment_date)}
                        />
                    </div>
                    
                    {/* Buttons */}
                    <div className="sm:col-span-2 flex justify-end gap-3 mt-4">
                        <button type="button" className="px-4 py-2 bg-red-100 text-white-600 rounded hover:bg-red-300">
                            Cancel
                        </button>
                        <button type="submit" className="px-6 py-2 bg-blue-200 text-white rounded hover:bg-blue-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default EditPatientProfile;