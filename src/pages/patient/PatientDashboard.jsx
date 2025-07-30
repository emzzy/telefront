import { useQuery } from '@tanstack/react-query';
import Dashboard from '../../components/Dashboard';
import { fetchPatientData } from '../../api/fetchData';
import Notifications from '../Notifications';


const PatientDashboard = ({ userType }) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['patientDashboardData'],
        queryFn: fetchPatientData,
    });

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error loading patient data</div>

    return (
        <>
            <Dashboard
                userType='patient'
                userData={data.patient}
                appointments={data.appointments}
                notifications={data.notifications}
                totalSpent={data.total_spent}
            />
        </>
    );
};
export default PatientDashboard;