import React from 'react';
import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import { getPatientNotification, markNotification } from '../../api/fetchData';
import { FaEye, FaCheckDouble } from 'react-icons/fa';
import moment from 'moment';


const PatientNotifications = () => {
    const { data: notifications, isLoading, isError } = useQuery({
        queryKey: ['notifications'],
        queryFn: getPatientNotification,
    });

    const mutation = useMutation({
        mutationFn: markNotification,
        onSuccess: () => {
            QueryClient.invalidateQueries(['notifications']);
        },
    });
    
    if (isLoading) return <div>Loading notifications...</div>;
    if (isError) return <div>Error loading notifications.</div>;

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Notifications</h1>

            <div className="overflow-x-auto shadow rounded-lg">
                <table className="w-full text-left border-collapse bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-sm font-semibold text-gray-600">#</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Type</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Appointment ID</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notifications.length > 0 ?  (
                        notifications.map((notif, index) => (
                            <tr key={notif.id} className="border-t hover:bg-gray-50">
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4">{notif.type}</td>
                                <td className="p-4">{moment(notif.date).format('DD MMM YYYY, HH:mm')}</td>
                                <td className="p-4">#{notif.appointment_id}</td>
                                <td className="p-4">
                                    {notif.seen ? (
                                    <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full">Seen</span>
                                    ) : (
                                    <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Unseen</span>
                                    )}
                                </td>
                                <td className="p-4">
                                    <button
                                        className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full hover:bg-yellow-200"
                                        onClick={() => mutation.mutate(notif.id)}
                                    >
                                        Mark as seen <FaCheckDouble />
                                    </button>
                                </td>
                            </tr>
                        ))
                        ) : (
                        <tr>
                            <td colSpan="6" className="p-4 text-center text-gray-500">
                                No notifications.
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientNotifications;