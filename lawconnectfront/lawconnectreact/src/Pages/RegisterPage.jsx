import React, { useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
const RegisterPage = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'user', // Default to 'User'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    navigate("/login");
  };


  return (
    <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4 text-black font-bold">Register</h2>
        <div className="mb-4 flex items-center justify-between bg-gray-300 border-slate-700 border-2"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full p-2 bg-lime-400 text-white font-semibold rounded hover:bg-opacity-90 focus:outline-none">
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className='text-black font-semibold'>
            Already have an account?{' '}
            <a href="#" className="text-lime-400 hover:underline">
              <Link to="/login">Login</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
