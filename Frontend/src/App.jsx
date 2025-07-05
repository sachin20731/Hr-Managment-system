import React from 'react'

import Home from './assets/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AdminDashboard from './assets/AdminDashboard'

function App() {


  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<AdminDashboard />} />
        {/* Add other routes here as needed */}
        {/* <Route path="/dashboard" element={<AdminDashboard />} /> */}
        
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
