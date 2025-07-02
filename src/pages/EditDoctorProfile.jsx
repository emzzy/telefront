import React, { useEffect, useState } from 'react'
import { useQuery, useMutation, useQueryClient, QueryClient } from '@tanstack/react-query'
import { fetchDoctorData, getDoctorDetails, updateDoctorDetails } from '../api/fetchData';


const EditDoctorProfile = () => {
    const queryClient = useQueryClient();
    const { data: doctorData, isLoading, isError } = useQuery({
        queryKey: ['doctorData'],
        queryFn: fetchDoctorData,
    });

    const mutation = useMutation({
        mutationFn: fetchDoctorData,
        onSuccess: () => {
            QueryClient.invalidateQueries(['doctorData']);
        },
    });

    if (isLoading) return <div> Loading profile </div>
    if (isError) return <div> Error loading profile </div>

    return (
        <div className='min-h-screen bg-white flex-items-center justify-center-p-4'>
            <div className='max-w-2xl w-full bg-white border rounded-xl shadow-md p-8'>
                
                {/* Header */}
                <div className='flex items-center justify-between mb-16'>
                    <h2 className='text-2xl-font-bold text-gray-800'>Edit Profile</h2>
                    <img src="" alt="profile-picture" className='w-14 h-14 rounded-full object-cover' />
                </div>
            </div>
            <form action="">
                <>
                    <div>
                        <label className='block text-gray-600 mb-1'>First Name</label>
                        <input 
                            type="text"
                            className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-orange-500'
                            placeholder='First Name'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-600 mb--1'>Last Name</label>
                        <input
                            type="text"
                            className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-orange-500'
                            placeholder='Last Name'
                        />
                    </div>
                    
                </>
                <div className='sm:col-span'>
                    <label className='block text-gray-600 mb--1'>Email</label>
                    <input
                        type="email"
                        className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                        placeholder='Email'
                    />
                </div>

                <div className='sm:col-span'>
                    <label className='block text-gray-600 mb--1'>Address</label>
                    <input
                        type="text"
                        className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        placeholder='Address'
                    />
                </div>

                <div className='sm:col-span'>
                    <label className='block text-gray-600 mb--1'>Contact Number</label>
                    <input
                        type="text"
                        className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        placeholder='Contact Number'
                    />
                </div>

                <div className='sm:col-span'>
                    <label className='block text-gray-600 mb--1'>Location</label>
                    <input
                        type="text"
                        className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        placeholder='Location'
                    />
                </div>

                <div className='sm:col-span'>
                    <label className='block text-gray-600 mb--1'>Password</label>
                    <input
                        type="password"
                        className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        placeholder='Password'
                    />
                </div>

                
            </form>
            {doctorData.map((data, index) => ())}
        </div>
    );
};
export default EditDoctorProfile;