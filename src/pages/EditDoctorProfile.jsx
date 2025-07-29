import React, { useEffect, useState } from 'react'
import { useQuery, useMutation, useQueryClient, QueryClient } from '@tanstack/react-query'
import { fetchDoctorData, getDoctorDetails, updateDoctorDetails } from '../api/fetchData';


const EditDoctorProfile = () => {
    const { data: doctorData, isLoading, isError } = useQuery({
        queryKey: ['doctorData'],
        queryFn: fetchDoctorData,
    });

    // convert date from local to utc
    const formatDateForInput = (isoDateStr) => {
        if (!isoDateStr) return '';
        const date = new Date(isoDateStr); // Converts from UTC to local time
        const pad = (n) => n.toString().padStart(2, '0');
        
        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };
    
    if (isLoading) return <div> Loading profile </div>
    if (isError) return <div> Error loading profile </div>

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white border rounded-xl shadow-md p-8">                
                
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Edit profile</h2>
                    <img
                        src={`http://localhost:8000${doctorData.doctor.image}`}
                        alt="Profile"
                        className="w-14 h-20 rounded-full object-cover"
                    />
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                        <label className="block text-gray-600 mb-1">Title</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Last Name"
                            defaultValue={doctorData?.doctor.title}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">First Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={doctorData?.doctor.user.first_name}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Last Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Last Name"
                            defaultValue={doctorData?.doctor.user.last_name}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
                            defaultValue={doctorData?.doctor.user.email}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Address</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={doctorData?.doctor.user.location} 
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-gray-600 mb-1">Contact Number</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={doctorData?.doctor.user.phone_number} 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Password" />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Medical License</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={doctorData?.doctor.medical_license}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Specialty</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={doctorData?.doctor.specialty}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Years of Experience</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={doctorData?.doctor.years_of_experience}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Professional certificate</label>
                        <input
                            type="file"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            defaultValue={doctorData?.doctor.professional_certificate}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-gray-600 mb-1">Bio</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={doctorData?.doctor.bio}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-gray-600 mb-1">Available Appointment Date</label>
                        <input
                            type="datetime-local"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            defaultValue={formatDateForInput(doctorData?.doctor.available_appointment_date)}
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
    );
};
export default EditDoctorProfile;