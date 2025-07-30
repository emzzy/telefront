import React from 'react'

const Message = ({ message }) => {
    return (
        <section className='container mx-auto'>
            <p> {message} </p>
        </section>
    )
}

export default Message;