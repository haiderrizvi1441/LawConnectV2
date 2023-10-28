import React from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


import AdminCards from './AdminCards';


function AdminMain() {

  const navigate = useNavigate();
  const style = { color: "white", fontSize: "45px" }

  const listalluser = async (e) =>{
    
  }
  return (

    <div>

      {/* navbar  */}

      <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
        <div className='flex items-center'>
          <div className='m-4'><FaHouseUser style={style} /></div>
          <div className='text-2xl hover:text-blue-500'>Admin Hub</div>
        </div>
        <ul className='flex font-semibold'>
          <li className='px-4 hover:text-lime-500'>About Us</li>
          <li className='px-4 hover:text-lime-500'>Contact Us</li>
        </ul>
        <div className='flex space-x-3 font-semibold'>
          <button className='px-4 py-4 bg-gray-500 rounded-lg hover:font-bold cursor-pointer hover:bg-lime-600  '>All Vendors</button>
          <button className='px-4 py-4 bg-gray-500 rounded-lg hover:font-bold cursor-pointer hover:bg-lime-600'>All Users</button>
          <button className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600'>Log Out</button>
        </div>
      </nav>

      {/* Hero */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4'>
        <AdminCards />
        <AdminCards />
        <AdminCards />
        <AdminCards />


      </div>




    </div>
  )
}

export default AdminMain