import React from 'react'
import { FaSearch, FaEye, FaEdit } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'
import { getPayments } from '../api/fetchData'


const Payments = () => {
    const { data: payments, isLoading, isError } = useQuery({
        queryKey: ['payments'],
        queryFn: getPayments,
    });
    console.log(payments)

    if (isLoading) return <div className="p-6 text-gray-600">Loading...</div>;
    if (isError) return <div className="p-6 text-red-600">Error fetching data...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Customer Payment List</h1>
                    <div className="flex gap-3">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add New</button>
                        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Export</button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Invoice ID"
                        className="border border-gray-300 px-4 py-2 rounded-md w-52"
                    />
                    <input
                        type="datetime-local"
                        className="border border-gray-300 px-4 py-2 rounded-md"
                    />
                    <input
                        type="datetime-local"
                        className="border border-gray-300 px-4 py-2 rounded-md"
                    />
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2">
                        <FaSearch />
                        Search
                    </button>
                </div>

                {/* Payments Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="p-3">#</th>
                                <th className="p-3">Billing ID</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Patient</th>
                                <th className="p-3">Payment Method</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {payments.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{item.billing_id}</td>
                                    <td className="p-3">{new Date(item.date).toLocaleDateString()}</td>
                                    <td className="p-3">{item.patient}</td>
                                    <td className="p-3">Card</td>
                                    <td className="p-3">${item.total}</td>
                                    <td className="p-3">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-3 space-x-2">
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FaEye />
                                        </button>
                                        <button className="text-yellow-500 hover:text-yellow-700">
                                            <FaEdit />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Payments;
