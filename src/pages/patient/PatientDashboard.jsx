import { useOutletContext } from 'react-router-dom';
import Dashboard from '../../components/Dashboard';

const PatientDashboard = () => {
    const { userData, patientData } = useOutletContext();

    return (
        <Dashboard
            userType="patient"
            userData={userData}
            appointments={patientData?.appointments || []}
            notifications={patientData?.notifications || []}
            totalSpent={patientData?.total_spent || 0}
        />
    );
};
export default PatientDashboard;