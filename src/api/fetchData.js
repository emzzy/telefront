import api from "./api";

export const fetchDoctorData = async () => {
    const res = await api.get('/doctor/dashboard/');
    return res.data;
};

export const getAppointments = async () => {
    const res = await api.get(`/doctor/appointments/${appointmentId}/`);
    return res.data;
};