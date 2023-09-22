import axios from 'axios';
import React, { useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
const RegisterPage = () => {

  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async(e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8082/admin/addAdmin",{
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      alert("You are successfully Registered");
      navigate("/login");
    }
    catch(error){
      alert(error.response.data);
    }
    
  }

  

  return (
    <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4 text-black font-bold">Register</h2>
        <div className="mb-4 flex items-center justify-between bg-gray-300 border-slate-700 border-2"></div>
        <form onSubmit={register} className='text-indigo-600'>
          <div className="mb-4 ">
            <input
              type="text"
              name="firstName"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First Name"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last Name"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
            Already have an account?<Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
