import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
function Navbar() {
  return (
    <div>
        {/* Navbar starts here  */}
        <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
                <div className='text-xl ml-3'>Law <span className='text-2xl hover:text-blue-500'>Connect.</span> </div>
                <ul className='flex font-semibold'>
                    <li className='px-4'>Home</li>
                    <li className='px-4'>About Us</li>
                    <li className='px-4'>Contact Us</li>
                </ul>
                <div className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3'><Link to="/login">Login</Link></div>
            </nav>

    </div>
  )
}

export default Navbar