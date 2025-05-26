import React from 'react'

const Message = ({ message }) => {
    return (
        <div className='container mx-auto'>
            <p> {message} </p>
        </div>
    )
}

export default Message;