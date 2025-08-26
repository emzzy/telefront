import React from 'react'

const Card = ({ icon, title, value }) => {
    return (
        <div className='w-full bg-white text-dark p-4 rounded-lg shadow-md flex items-center space-x-6 hover:bg-gray-200 border border-gray-200'>
            <div className='text-3xl text-gray-500'>
                {icon}
            </div>
            <div className='flex-1 min-w-0'>
                <h2 className='text-lg font-semibold text-gray-800'> {title} </h2>
                <p className='text-xl font-bold text-gray-900'> {value} </p>
            </div>
        </div>
    )
};

export default Card;