import React, { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { editLabTest } from '../api/fetchData'


const EditLabReportModal = ({ showModal, closeModal, appointmentId, labTest, onSuccess }) => {
    const [formData, setFormData] = useState({
        test_name: "",
        description: "",
        result: ""
    });

    const queryClient = useQuery();

    useEffect(() => {
        if(labTest) {
            setFormData({
                test_name: labTest.test_name || "",
                description: labTest.description || "",
                result: labTest.result || ""
            });
        }
    }, [labTest]);

    const mutation = useMutation({
        mutationFn: (data) => editLabTest(appointmentId, labTest.id, data),
        onSuccess: () => {
            queryClient.invalidateQueries(['appointmentDetail', appointmentId]);
            onSuccess?.();
            closeModal();
        },
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    if (!showModal) return null;

    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <h2>Edit Lab Test</h2>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='test_name' value={formData.test_name} onChange={handleChange} required />
                        <input type='text' name='description' value={formData.description} onChange={handleChange} required />
                        <input type='text' name='result' value={formData.result} onChange={handleChange} required />
                        <button type='submit'>Save</button>
                        <button type='button' onClick={closeModal}>Cancel</button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default EditLabReportModal;