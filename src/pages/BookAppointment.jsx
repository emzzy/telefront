import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const BookAppointment = () => {
  const { serviceId, doctorId } = useParams();
  const [service, setService] = useState();

  useEffect(() => {
    api.get(`base/service/${id}`)
    .then((res) => setService(res.data))
    .catch((err) => console.error(err));
}, [id]);

  const handleSubmit = async (e) => {
    const serviceDetail = []
  }
  return (
    <div>
      
    </div>

  )
}

export default BookAppointment;