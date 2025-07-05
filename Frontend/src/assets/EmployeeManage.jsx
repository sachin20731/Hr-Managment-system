import React, { useState } from 'react';
import Sidebar from '../components/sidebar';

const dummyEmployees = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    department: 'IT',
    designation: 'Software Engineer',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    department: 'HR',
    designation: 'HR Manager',
  },
];

function Employees() {
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedDes, setSelectedDes] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleSearch = () => {
    const result = dummyEmployees.filter((emp) => {
      return (
        (!selectedDept || emp.department === selectedDept) &&
        (!selectedDes || emp.designation === selectedDes)
      );
    });
    setFilteredEmployees(result);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Employees</h1>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>

          <select
            value={selectedDes}
            onChange={(e) => setSelectedDes(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Designation</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="HR Manager">HR Manager</option>
            <option value="Accountant">Accountant</option>
          </select>

          <button
            onClick={handleSearch}
            className="bg-green-700 text-white rounded p-3 hover:bg-green-800 transition"
          >
            Search
          </button>
        </div>

        {/* Results */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <div key={emp.id} className="bg-white border border-green-200 p-4 rounded shadow-md">
                <h2 className="text-lg font-semibold text-green-800">{emp.name}</h2>
                <p><span className="font-medium">Email:</span> {emp.email}</p>
                <p><span className="font-medium">Phone:</span> {emp.phone}</p>
                <p><span className="font-medium">Department:</span> {emp.department}</p>
                <p><span className="font-medium">Designation:</span> {emp.designation}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full">No employees found. Try filtering.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Employees;
