import { createContext, useState, useContext, children } from "react";

const AppointmentFormContext = createContext();

export const useAppointmentForm = () => useContext(AppointmentFormContext);

export const AppointmentFormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    return (
        <AppointmentFormContext.Provider value={{ formData, setFormData }}>
            {children}
        </AppointmentFormContext.Provider>
    );
};