import { createContext, useState, useContext, Children } from "react";

const AppointmentFormContext = createContext();

export const useAppointmentForm = () => useContext(FormContext);

export const AppointmentFormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    return (
        <AppointmentFormContext.Provider value={{ formData, setFormData }}>
            {children}
        </AppointmentFormContext.Provider>
    );
};