import api from "./api";

export const fetchDoctorData = async () => {
    const res = await api.get('/doctor/dashboard/');
    return res.data;
};

export const getAppointments = async (appointmentId) => {
    const res = await api.get(`/doctor/appointment/${appointmentId}/`);
    return res.data;
};

export const cancelAppointment = async (appointmentId) => {
    const res = await api.post(`/doctor/appointment/${appointmentId}/cancel/`);
    return res.data;
};

export const completeAppointment = async (appointmentId) => {
    const res = await api.post(`/doctor/appointment/${appointmentId}/complete/`);
    return res.data;
};

export const addMedicalreport = async (appointmentId, data) => {
    const res = await api.post(`/doctor/appointment/${appointmentId}/add-record/`, data);
    return res.data;
}