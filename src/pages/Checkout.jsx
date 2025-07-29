import React, { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom';
import { useAppointmentForm } from '../context/AppointmentFormContext';
import { useAppointmentContext } from '../context/AppointmentContext';
import api from '../api/api';
import { PayPalButtons } from '@paypal/react-paypal-js';

const Checkout = () => {
    const { billingId } = useParams();
    const { formData } = useAppointmentForm();
    const { doctorDetails } = useAppointmentContext();
    const [billingDetails, setBillingDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        api.get(`base/billing/${billingId}/`)
        .then((res) => setBillingDetails(res.data.data))
        .catch((err) => console.error(err));
    }, [billingId]);
    
    const handlePayClick = async () => {
        setLoading(true);

        try {
            const res = await api.post(`base/create-checkout-session/${billingId}/`);
            
            if (res.data && res.data.url) {
                window.location.href = res.data.url;
            } else {
                console.error('No Stripe session URL returned');
            }
        } catch (error) {
            console.error('Stripe checkout error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Billing details</h1>
            <form>
                <fieldset>
                    <h2> Patient Biodata </h2>
                    <div>
                        <label htmlFor="readOnlyInput">First Name </label>
                        <input type="text" id='firstName' value={formData.first_name} readOnly />
                    </div>
                    <div>
                        <label htmlFor="readOnlyInput">Last Name </label>
                        <input type="text" id='lastName' value={formData.last_name} readOnly />
                    </div>
                    <div>
                        <label htmlFor="readOnlyInput">Email </label>
                        <input type="text" id='email' value={formData.email} readOnly />
                    </div>
                    <div>
                        <label htmlFor="readOnlyInput">Mobile number </label>
                        <input type="text" id='mobile' value={formData.phone_number} readOnly />
                    </div>
                    <div>
                        <label htmlFor="readOnlyInput"> Gender </label>
                        <input type="text" id='gender' value={formData.gender} readOnly />
                    </div>
                    <div>
                        <label htmlFor="readOnlyInput"> Date of Birth </label>
                        <input type="text" id='dateOfBirth' value={formData.date_of_birth} readOnly />
                    </div>
                    <div>
                        <label htmlFor="readOnlyInput"> Location </label>
                        <input type="text" id='location' value={formData.location} readOnly />
                    </div>
                    <div>
                        <label htmlFor="readOnlyInput"> Issues </label>
                        <input type="text" id='issues' value={formData.issues} readOnly />
                    </div>
                    <div>
                        <label htmlFor="readOnlyInput"> Symptoms </label>
                        <input type="text" id='symptoms' value={formData.symptoms} readOnly />
                    </div>
                </fieldset>
            </form>
            
            {billingDetails ? (
                <div>
                    <fieldset>
                        <label htmlFor="readOnlyInput"> Sub-total £{billingDetails.sub_total} </label>
                        <label htmlFor="readOnlyInput"> VAT £{billingDetails.tax} </label>
                        <label htmlFor="readOnlyInput"> Total £{billingDetails.total} </label>
                        
                        <button
                            onClick={handlePayClick}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : 'Pay with stripe'}
                        </button>

                        <div style={{ marginTop: "1rem" }}>
                            <PayPalButtons
                                style={{ layout: "vertical" }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: billingDetails.total.toString(),
                                                currency_code: "GBP"
                                            },
                                        }],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then(function (details) {
                                        api.get(`base/paypal/verify/${billingId}/?transaction_id=${data.orderID}}`)
                                            .then(res => {
                                                console.log('Payment verified', res.data);
                                                navigate('/payment-success');
                                            })
                                            .catch(err => {
                                                console.error('verification failed', err);
                                            });
                                    });
                                }}
                                onError={(err) => {
                                    console.error('Paypal checkout error', err);
                                }}
                            />
                        </div>
                    </fieldset>
                </div>
            ) : ( 
                <p> Loading billing details..... </p>
            )}

            <div>
                <h2> Attending Doctor </h2>
                <img 
                    src={`http://localhost:8000${doctorDetails?.medicalprofessional.image}`}
                    alt="Doctor Image"
                />
                <h3> Dr. {doctorDetails?.first_name} {doctorDetails?.last_name} </h3>
                <p> {doctorDetails?.medicalprofessional.bio} </p>
            </div>
        </div>
    )
}

export default Checkout;