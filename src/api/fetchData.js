import { data } from "react-router-dom";
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

export const getNotifications = async () => {
    const res = await api.get('/doctor/notifications/');
    return res.data;
};

export const markNotification = async (id) => {
    const res = await api.patch(`/doctor/notifications/${id}/seen/`);
    return res.data;
};

export const getDoctorDetails = async () => {
    const res = await api.get(`/doctor/profile/`);
    return res.data;
};

export const updateDoctorDetails = async () => {
    const res = await api.put(`/doctor/profile/`, data);
    return res.data;
};

// Patient data
export const fetchPatientData = async () => {
    const res = await api.get(`/patient/dashboard/`);
    return res.data;
};

export const getPatientNotification = async () => {
    const res = await api.get(`/patient/notifications/`);
    return res.data;
};

export const updatePatientData = async () => {
    const res = await api.put(`/patient/update-profile/`);
    return res.data;
};

export const getPatientAppointmentDetail = async (appointmentId) => {
    const res = await api.get(`/patient/appointment/${appointmentId}detail/`);
    return res.data;
}