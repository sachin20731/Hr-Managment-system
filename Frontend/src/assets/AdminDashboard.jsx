import React from 'react'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div>
        <div><Sidebar/></div>
    </div>
  )
}

export default AdminDashboard