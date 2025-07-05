import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, Briefcase, BadgeCheck } from 'lucide-react'; // You can use any icon library

function Sidebar() {
  const linkClass =
    'flex items-center gap-3 px-4 py-3 hover:bg-green-200 rounded text-green-900 font-medium transition';

  return (
    <div className="w-64 min-h-screen bg-green-100 shadow-md p-4 fixed">
      <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        <NavLink to="/employees" className={linkClass}>
          <Users size={18} /> Employees
        </NavLink>
        <NavLink to="/departments" className={linkClass}>
          <Briefcase size={18} /> Departments
        </NavLink>
        <NavLink to="/designations" className={linkClass}>
          <BadgeCheck size={18} /> Designations
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
