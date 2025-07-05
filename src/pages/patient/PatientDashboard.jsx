import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Dashboard from '../../components/Dashboard';
import { fetchPatientData } from '../../api/fetchData';


const PatientDashboard = () => {
    const { data: patientDashboardData, isLoading, isError } = useQuery({
        queryKey: ['patientDashboardData'],
        queryFn: fetchPatientData,
    });

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error loading patient data</div>

    return (
        <Dashboard
            userType='patient'
            userData={patientDashboardData.patient}
            appointments={patientDashboardData.appointments}
            notifications={patientDashboardData.notifications}
        />
    );
};
export default PatientDashboard;