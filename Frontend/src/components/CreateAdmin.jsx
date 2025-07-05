import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import axios from 'axios'; 

function CreateAdmin() {
  const [form, setForm] = useState({
    name: '',
    employeeId: '',
    phone: '',
    email: '',
    password: '',
  });

  const generatePassword = () => {
    const randomPass = Math.random().toString(36).slice(-10);
    setForm({ ...form, password: randomPass });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/admins', form);
      if (res.status === 200 || res.status === 201) {
        alert('Admin created successfully!');
        setForm({ name: '', employeeId: '', phone: '', email: '', password: '' });
      }
    } catch (error) {
      console.error(error);
      alert('Failed to create admin.');
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Create Admin</h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-md w-full max-w-lg">
          <div className="mb-4">
            <label className="block mb-1 text-green-800 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter full name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-green-800 font-semibold">Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={form.employeeId}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. ADM001"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-green-800 font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g. 0771234567"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-green-800 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="admin@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-green-800 font-semibold">Password</label>
            <div className="flex">
              <input
                type="text"
                name="password"
                value={form.password}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-l"
              />
              <button
                type="button"
                onClick={generatePassword}
                className="bg-green-700 text-white px-4 rounded-r hover:bg-green-800"
              >
                Generate
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Create Admin
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAdmin;
