import React from 'react'
import { fetchDoctorData } from '../api/fetchData';
import { useQuery } from '@tanstack/react-query';
import Dashboard from '../components/Dashboard';


const DoctorDashboard = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['doctorDashboardData'],
        queryFn: fetchDoctorData,
    });

    if (isLoading) return <div>Loading....</div>
    if (isError) return <div>Error loading data</div>

    return (
        <>
            <Dashboard
                userType='doctor'
                userData={data.doctor}
                appointments={data.appointments}
                notifications={data.notifications}
            />
        </>
    );
};
export default DoctorDashboard;