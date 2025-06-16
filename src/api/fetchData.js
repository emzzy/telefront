import api from "./api";

export const fetchDoctorData = async () => {
    const res = await api.get('/doctor/dashboard/');
    return res.data;
};

export const getAppointments = async (appointmentId) => {
    const res = await api.get(`/doctor/appointment/${appointmentId}/`);
    return res.data;
};