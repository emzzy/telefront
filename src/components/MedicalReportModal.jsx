import React, { useEffect, useRef, useState } from 'react'
import { addMedicalreport } from '../api/fetchData';
import { useMutation } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'


const MedicalReportModal = ({ showModal, closeModal }) => {
    const { appointmentId } = useParams();
    console.log(`Appointment Id Is = ${appointmentId}`)
    if (!showModal) return null;
    const modalRef = useRef();
    const [formData, setFormData] = useState({ treatment: "", diagnosis: "" });
    const mutation = useMutation({
        mutaionFn: (data) => addMedicalreport(appointmentId, data),
        onSuccess: () => {
            closeModal();
        },
        onError: (error) => {
            alert('Failed to save medical report.')
            console.error(error);
        },
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeModal]);

    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
                <div ref={modalRef} className='bg-white p-6 rounded shadow-lg w-full max-w-lg'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block font-medium mb-1'> Diagnosis </label>
                            <input
                                type="text"
                                name='diagnosis'
                                className='w-full border border-gray-300 p-2 rounded'
                                value={formData.diagnosis}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className='block font-medium'> Treatment </label>
                            <textarea
                                name='treatment'
                                className='w-full border border-gray-300 p-2 rounded'
                                value={formData.treatment}
                                onChange={handleChange}
                                rows={4}
                                required
                            />
                        </div>
                        <div className='flex justify-end gap-2'>
                            <button
                                className='px-4 py-2 border border-gray-300 rounded hover:bg-green-200'
                                type='submit'
                                onClick={() => addMedicalreport(appointmentId)}                   
                            >
                                {mutation.isLoading ? 'Saving...' : 'Save'}
                            </button>
                            <button
                                className='px-4 py-2 border border-gray-300 rounded hover:bg-red-200'
                                type='submit'
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default MedicalReportModal;