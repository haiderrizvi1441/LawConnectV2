import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [myrole, setMyRole] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    // To Navigate to respective HomePage as per roles (0:USER, 1:VENDOR, 2:ADMIN)
    // To find the user and check if creds are matching, also role.
    let apiurl = "";
    switch(myrole){
      case 'ADMIN':
        apiurl = "http://localhost:8082/admin/login";
        break;
      
      case 'VENDOR':
        apiurl = "http://localhost:8080/vendor/login";
        break;
      
      case 'USER':
        apiurl = "http://localhost:8081/customer/login";
        break;
      
      default:
        apiurl = "http://localhost:8081/customer/login";
        break;


    }
    try {
      await axios.post(apiurl, {
        email: email,
        password: password
      }).then((result) => {
        console.log(result.data);

        if (result.data.message === "Email does not exist") {
          alert("Email does not exist");
        }
        else if (result.data.message === "Login Success") {
          if (result.data.role === "ADMIN") {
            navigate("/adminhome")
          }
          else if (result.data.role === "VENDOR") {
            navigate("/vendorhome")
          }
          else {
            navigate("/userhome")
          }
        }
        else {
          alert("Incorrect Email or Password , Please try again");
        }

      }, fail => {
        console.error(fail)
      })
    }
    catch (err) {
      alert(err.response.data);
    }

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


          <div className='radiobuttons text-bold text-black font-semibold bg-gray-400'>
            <p className='underline'>Login as </p>
            <input className="m-2" type="radio" value="ADMIN" checked={myrole === "ADMIN"} onChange={() => { setMyRole('ADMIN') }} />
            <label className="m-2">Admin</label>
            <input className="m-2" type="radio" value="VENDOR" checked={myrole === "VENDOR"} onChange={() => { setMyRole('VENDOR') }} />
            <label className="m-2">Vendor</label>
            <input className="m-2" type="radio" value="USER" checked={myrole === "USER"} onChange={() => { setMyRole('USER') }} />
            <label className="m-2">Customer</label>
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