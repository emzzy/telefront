import React, { useState } from 'react'

const MedicalReportModal = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
                <div className='bg-white p-6 rounded shadow-lg w-full max-w-lg'>
                    <form>
                        <div className='mb-4'>
                            <label className='block font-medium mb-1'> Diagnosis </label>
                            <input
                                type="text"
                                name='diagnosis'
                                className='w-full border border-gray-300 p-2 rounded'
                                required
                            />
                        </div>
                        <div>
                            <label className='block font-medium'> Treatment </label>
                            <textarea
                                name='treatment'
                                className='w-full border border-gray-300 p-2 rounded'
                                rows={4}
                                required
                            />
                        </div>
                        <div className='flex justify-end gap-2'>
                            <button
                            className='px-4 py-2 border border-gray-300 rounded hover:bg-gray-200'
                            type='button'
                            
                            
                            >
                                Save
                            </button>
                            <button
                                className='px-4 py-2 border border-gray-300 rounded hover:bg-gray-200'
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