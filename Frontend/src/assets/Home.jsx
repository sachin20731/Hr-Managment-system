// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../img/vecteezy_portrait-of-happy-multi-ethnic-business-couple-illustration_24344056.png';


// function Home() {
//   const [designation, setDesignation] = useState('');

//   return (
//     <>
//       <div className="w-full h-screen bg-gradient-to-r from-green-100 to-green-400 pt-20 font-sans">
//         <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center h-full px-6">
          
//           {/* Left: Welcome section */}
//           <div className="flex flex-col items-center justify-center text-center lg:w-1/2 p-6">
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-90 h-90  "
//             />
//             <h1 className="text-5xl font-bold text-green-900">WELCOME</h1>
//             <h2 className="text-6xl font-extrabold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mt-2">
//               HR MANAGEMENT SYSTEM
//             </h2>
//           </div>

//           {/* Right: Login form */}
//           <div className="flex justify-center items-center lg:w-1/2">
//             <form className="flex flex-col gap-4 p-6 w-96 border border-green-200 bg-green-100 shadow-lg shadow-green-500/50 rounded-3xl">
//               <h1 className="text-4xl text-center text-green-900 font-semibold">Login</h1>

//               {/* Department Dropdown */}
//               <div>
//                 <label className="text-lg text-green-900 font-medium" htmlFor="department">Department</label>
//                 <select
//                   id="department"
//                   className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
//                   required
//                 >
//                   <option value="">Select your department</option>
//                   <option value="it">IT</option>
//                   <option value="finance">Finance</option>
//                   <option value="hr">Human Resources</option>
//                   <option value="marketing">Marketing</option>
//                   <option value="operations">Operations</option>
//                 </select>
//               </div>

//               {/* Designation Dropdown */}
//               <div>
//                 <label className="text-lg text-green-900 font-medium" htmlFor="designation">Designation</label>
//                 <select
//                   id="designation"
//                   value={designation}
//                   onChange={(e) => setDesignation(e.target.value)}
//                   className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
//                   required
//                 >
//                   <option value="">Select your designation</option>
//                   <option value="admin">Admin</option>
//                   <option value="hr">HR Manager</option>
//                   <option value="employee">Employee</option>
//                 </select>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="text-lg text-green-900 font-medium" htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="border border-gray-300 rounded-md p-2 mt-1 w-full"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="text-lg text-green-900 font-medium" htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="border border-gray-300 rounded-md p-2 mt-1 w-full"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>

//               {/* Login Button */}
//               <Link
//                 to="/sidebar"
//                 className="bg-green-800 text-white rounded-md p-2 mt-2 hover:bg-green-700 text-center"
//               >
//                 Login
//               </Link>
//             </form>
//           </div>
//         </div>

        
//       </div>
//     </>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../img/vecteezy_portrait-of-happy-multi-ethnic-business-couple-illustration_24344056.png';

function Home() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    department: '',
    designation: ''
  });


  const navigate = useNavigate();

 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/employees/login`, form);
      const user = response.data;
      alert(`Welcome ${user.name}`);
      navigate('/sidebar');
    } catch (err) {
      alert('Invalid credentials');
      console.error(err);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-100 to-green-400 pt-20 font-sans">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center h-full px-6">
        
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center text-center lg:w-1/2 p-6">
          <img src={logo} alt="Logo" className="w-90 h-90" />
          <h1 className="text-5xl font-bold text-green-900">WELCOME</h1>
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mt-2">
            HR MANAGEMENT SYSTEM
          </h2>
        </div>

        {/* Right Section: Login Form */}
        <div className="flex justify-center items-center lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 w-96 border border-green-200 bg-green-100 shadow-lg shadow-green-500/50 rounded-3xl"
          >
            <h1 className="text-4xl text-center text-green-900 font-semibold">Login</h1>

            

            

            {/* Email */}
            <div>
              <label className="text-lg text-green-900 font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="border border-gray-300 rounded-md p-2 mt-1 w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-lg text-green-900 font-medium">Password</label>
              <input
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="border border-gray-300 rounded-md p-2 mt-1 w-full"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-green-800 text-white rounded-md p-2 mt-2 hover:bg-green-700 text-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
