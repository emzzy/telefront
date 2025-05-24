import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
    const [serviceDetails, setServiceDetails] = useState(null);
    const [doctorDetails, setDoctorDetails] = useState(null);

    return (
    <AppointmentContext.Provider value={{
        serviceDetails,
        setServiceDetails, 
        doctorDetails, 
        setDoctorDetails
    }}>
        {children}
    </AppointmentContext.Provider>
    );
};

export const useAppointmentContext = () => useContext(AppointmentContext);