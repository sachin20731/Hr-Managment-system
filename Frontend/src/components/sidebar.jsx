import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, Briefcase, BadgeCheck, UserPlus } from 'lucide-react'; // UserPlus is for the Create Admin icon

function Sidebar() {
  const linkClass =
    'flex items-center gap-3 px-4 py-3 hover:bg-green-200 rounded text-green-900 font-medium transition';

  return (
    <div className="w-64 min-h-screen bg-green-100 shadow-md p-4 fixed">
      <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Admin Panel</h2>

      {/* Navigation links */}
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? 'bg-green-300 font-semibold' : ''}`
          }
        >
          <Users size={18} /> Employees
        </NavLink>
        <NavLink to="/departments" className={linkClass}>
          <Briefcase size={18} /> Departments
        </NavLink>
        <NavLink to="/designations" className={linkClass}>
          <BadgeCheck size={18} /> Designations
        </NavLink>
      </nav>

      {/* Divider */}
      <hr className="my-6 border-green-300" />

      {/* Create Admin Button */}
      <NavLink
        to="/create-admin"
        className="flex items-center gap-3 px-4 py-3 bg-green-700 text-white rounded hover:bg-green-800 transition font-medium"
      >
        <UserPlus size={18} /> Create Admin
      </NavLink>
    </div>
  );
}

export default Sidebar;
