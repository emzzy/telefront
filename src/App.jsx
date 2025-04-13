import Navbar from './components/Navbar'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './components/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SelectRole from './pages/auth/SelectRole'


function Logout() {
  localStorage.clear()
  return <Navigate to='/login' />
}

function RegisterAndLougout() {
  localStorage.clear()
  return <Register />
}

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<RegisterAndLougout />} />
        <Route path='/select-role' element={<SelectRole />} />
        <Route path='*' element={<NotFound />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
