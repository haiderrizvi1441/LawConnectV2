import { eventWrapper } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import { Navbar } from 'flowbite-react';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    // To Navigate to respective HomePage as per roles (0:USER, 1:VENDOR, 2:ADMIN)
    try{
      const response = await axios.post(`http://localhost:8081/user/email/${email}`, {password});
      if(response.status === 200){
        navigate("/adminhome");
      }
      else{
        alert("Invalid Email or Password , Please try again");
      }
    }
    catch(error){
      console.error("Error: ",error);
      window.alert("An Error occured, Please try again", error);
    }
    // To find the user and check if creds are matching, also role.
    
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4 text-black font-bold">Login</h2>
        <div className="mb-4 flex items-center justify-between bg-gray-300 border-slate-700 border-2 "></div>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4 text-black font-semibold">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400 "
              required
            />
          </div>
          <div className="mb-4 text-black font-semibold">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border rounded focus:outline-none focus:border-lime-400"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full p-2 bg-lime-400 text-white font-semibold rounded hover:bg-opacity-90 focus:outline-none">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className='text-black font-semibold'>
            New to LawConnect ? {' '}
            <a href="#" className="text-lime-400 hover:underline hover:text-lime-800">
              <Link to="/register">Register</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage