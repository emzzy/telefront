import React, { useEffect, useRef, useState } from 'react'
import { data, useParams } from 'react-router-dom';
import { addLabReport } from '../api/fetchData';
import { useMutation } from '@tanstack/react-query';


const AddLabReportModal = ({ showLabReportModal, closeModal, onSuccess }) => {
    const { appointmentId } = useParams();
    const modalRef = useRef();
    const [formData, setFormData] = useState({ test_name: "", description: "", result: "" });

    const mutation = useMutation({
        mutationFn: (data) => addLabReport(appointmentId, data),
        onSuccess: () => {
            onSuccess();
            closeModal();
        },
        onError: (error) => {
            alert('Failed to save Lab Report. Try again');
            console.error(error);
        },
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
        console.log('Submitting Lab Test Data:', formData);
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
    
    if (!showLabReportModal) return null; 
    
    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
                <div ref={modalRef} className='bg-white p-6 rounded shadow-lg w-full max-w-lg'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block font-medium mb-1'> Test Name </label>
                            <input
                                type="text"
                                name='test_name'
                                className='w-full border border-gray-300 p-2 rounded'
                                value={formData.test_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className='block font-medium'> Description </label>
                            <textarea
                                name='description'
                                className='w-full border border-gray-300 p-2 rounded'
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                required
                            />
                        </div>
                        <div>
                            <label className='block font-medium'> Result </label>
                            <textarea
                                name='result'
                                className='w-full border border-gray-300 p-2 rounded'
                                value={formData.result}
                                onChange={handleChange}
                                rows={4}
                                required
                            />
                        </div>
                        <div className='flex justify-end gap-2'>
                            <button
                                className='px-4 py-2 border border-gray-300 rounded hover:bg-green-200'
                                type='submit'                   
                            >
                                {mutation.isLoading ? 'Saving...' : 'Save'}
                            </button>
                            <button
                                className='px-4 py-2 border border-gray-300 rounded hover:bg-red-200'
                                type='button'
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
export default AddLabReportModal;