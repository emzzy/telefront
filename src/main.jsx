import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AppointmentProvider } from './context/AppointmentContext.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import './styles/global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <PayPalScriptProvider options={{ "client-id": clientId, currency: "GBP" }}>
          <AppointmentProvider>
            <App />
          </AppointmentProvider>
        </PayPalScriptProvider>
      </QueryClientProvider>
  </StrictMode>
)