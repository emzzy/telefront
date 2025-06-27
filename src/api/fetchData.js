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
};

export const editMedicalReport = async (appointmentId, reportId, data) => {
    const res = await api.post(`/doctor/appointment/${appointmentId}/${reportId}/edit/`, data);
    return res.data;
};

export const addLabReport = async (appointmentId, data) => {
    const res = await api.post(`/doctor/appointment/${appointmentId}/add-lab-test/`, data);
    return res.data;
};

export const editLabTest = async (appointmentId, labTestId, updateData) => {
    const res = await api.post(`/doctor/appointment/${appointmentId}/lab_tests/${labTestId}/edit/`, updateData);
    return res.data;
};

export const getPayments = async () => {
    const res = await api.get('/doctor/payments/');
    return res.data;
};