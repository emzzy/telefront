import { Children, createContext, use, useState } from "react";

export DoctorDashboardContext = createContext();

export const DoctorDashboardProvider = ({ children }) => {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading]
}