import { useOutletContext } from 'react-router-dom';
import Dashboard from '../../components/Dashboard';

const DoctorDashboard = () => {
    const { userData, doctorData } = useOutletContext();
    
    return (
        <Dashboard
            userType="doctor"
            userData={userData}
            appointments={doctorData?.appointments || []}
            notifications={doctorData?.notifications || []}
            totalEarnings={doctorData?.total_earnings || 0}
        />
    );
};
export default DoctorDashboard;