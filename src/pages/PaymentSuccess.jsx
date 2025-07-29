import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../api/api';

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState('Verifying your payment...');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const sessionId = queryParams.get('session_id');

        const verifyPayment = async () => {
            try {
                const res = await api.get(`base/verify-payment/${sessionId}/`);
                
                if (res.data.status === 'success') {
                    setMessage('Payment confirmed! \nThank you. Your appointment is verified.');
                } else {
                    setMessage('Payment failed or has been verified.');
                }
            } catch (error) {
                setMessage('An error occurred while verifying your payment.');
                console.log(error);
            }

            setTimeout(() => {
                navigate('/dashboard');
            }, 5000);
        };

        if (sessionId) {
            verifyPayment();
        } else {
            setMessage('Session Id does not exist in url.');
        }
    }, [location, navigate]);

    return (
    <div>
        <h1>Payment Status</h1>
        <p>{message}</p>
        <p>You'll be redirected shortly...</p>
    </div>
    );
    
};
export default PaymentSuccess;
