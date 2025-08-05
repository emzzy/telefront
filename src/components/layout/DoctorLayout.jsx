import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SideBar from '../SideBar';
import { fetchDoctorData } from '../../api/fetchData'; // You'll need to create this


const DoctorLayout = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['doctorData'],
        queryFn: fetchDoctorData, // Create this function similar to fetchPatientData
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg text-red-600">Error loading doctor data</div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <SideBar userData={data?.doctor} userType="doctor" />
            <div className="flex-1 ml-16 md:ml-64">
                <div className="bg-white min-h-screen">
                    <Outlet context={{ userData: data?.doctor, doctorData: data }} />
                </div>
            </div>
        </div>
    );
};
export default DoctorLayout;