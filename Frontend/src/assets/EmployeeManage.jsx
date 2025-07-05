// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from '../components/sidebar';

// function Employees() {
//   const [departments, setDepartments] = useState([]);
//   const [designations, setDesignations] = useState([]);
//   const [selectedDept, setSelectedDept] = useState('');
//   const [selectedDes, setSelectedDes] = useState('');
//   const [filteredEmployees, setFilteredEmployees] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Fetch departments and designations on component mount
//   useEffect(() => {
//     const fetchFilters = async () => {
//       try {
//         const [deptRes, desRes] = await Promise.all([
//           axios.get('http://localhost:8080/api/employees/departments'),
//           axios.get('http://localhost:8080/api/employees/designations'),
//         ]);
//         setDepartments(deptRes.data);
//         setDesignations(desRes.data);
//       } catch (err) {
//         console.error('Failed to fetch filter options', err);
//       }
//     };

//     fetchFilters();
//   }, []);

//   const handleSearch = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.get('http://localhost:8080/api/employees/search', {
//         params: {
//           department: selectedDept || undefined,
//           designation: selectedDes || undefined,
//         }
//       });
//       setFilteredEmployees(response.data);
//     } catch (err) {
//       setError('Failed to fetch employees.');
//       setFilteredEmployees([]);
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="ml-64 w-full min-h-screen bg-gray-50 p-8">
//         <h1 className="text-3xl font-bold text-green-800 mb-6">Employees</h1>

//         {/* Filters */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//           <select
//             value={selectedDept}
//             onChange={(e) => setSelectedDept(e.target.value)}
//             className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-green-400"
//           >
//             <option value="">Select Department</option>
//             {departments.map((dept) => (
//               <option key={dept} value={dept}>
//                 {dept}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedDes}
//             onChange={(e) => setSelectedDes(e.target.value)}
//             className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-green-400"
//           >
//             <option value="">Select Designation</option>
//             {designations.map((des) => (
//               <option key={des} value={des}>
//                 {des}
//               </option>
//             ))}
//           </select>

//           <button
//             onClick={handleSearch}
//             disabled={loading}
//             className="bg-green-700 text-white rounded p-3 hover:bg-green-800 transition disabled:opacity-50"
//           >
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </div>

//         {/* Error */}
//         {error && <p className="text-red-600 mb-4">{error}</p>}

//         {/* Results */}
//         <div className="overflow-x-auto bg-white rounded shadow-md p-4">
//           {filteredEmployees.length > 0 ? (
//             <table className="min-w-full table-auto border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-green-100 text-green-900">
//                   <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Department</th>
//                   <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredEmployees.map((emp) => (
//                   <tr key={emp.id} className="even:bg-gray-50">
//                     <td className="border border-gray-300 px-4 py-2">{emp.name}</td>
//                     <td className="border border-gray-300 px-4 py-2">{emp.email}</td>
//                     <td className="border border-gray-300 px-4 py-2">{emp.phone}</td>
//                     <td className="border border-gray-300 px-4 py-2">{emp.department}</td>
//                     <td className="border border-gray-300 px-4 py-2">{emp.designation}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-gray-600 text-center py-4">
//               {loading ? 'Loading employees...' : 'No employees found. Try filtering.'}
//             </p>
//           )}
//           </div>

//       </div>
//     </div>
//   );
// }

// export default Employees;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/employees');
      setEmployees(response.data);
    } catch (err) {
      setError('Failed to fetch employees');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/employees/${id}`);
      
    } catch (err) {
      alert('Failed to delete employee');
      console.error(err);
    }
  };

  const handleUpdate = () => {
    alert(`Update functionality `);
  };

  const handleCreate = () => {
    alert('Redirect to create employee form');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen bg-gray-50 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-800">Employees</h1>
          <button
            onClick={handleCreate}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Create Employee
          </button>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <div className="overflow-x-auto bg-white rounded shadow-md p-4">
          {loading ? (
            <p className="text-center text-gray-600">Loading employees...</p>
          ) : employees.length > 0 ? (
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-green-100 text-green-900">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Phone</th>
                  <th className="border border-gray-300 px-4 py-2">Department</th>
                  <th className="border border-gray-300 px-4 py-2">Designation</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} className="even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{emp.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{emp.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{emp.phone}</td>
                    <td className="border border-gray-300 px-4 py-2">{emp.department}</td>
                    <td className="border border-gray-300 px-4 py-2">{emp.designation}</td>
                    <td className="border border-gray-300 px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleUpdate(emp)}
                        className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-600">No employees found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Employees;
