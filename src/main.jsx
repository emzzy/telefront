import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AppointmentProvider } from './context/AppointmentContext.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import './styles/global.css'


const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PayPalScriptProvider options={{ "client-id": clientId, currency: "GBP" }}>
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    </PayPalScriptProvider>
  </StrictMode>,
)
