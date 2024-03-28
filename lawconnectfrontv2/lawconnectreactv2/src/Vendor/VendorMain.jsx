import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react';
import { FaHouseUser } from 'react-icons/fa'
import TabsVendor from './TabsVendor'
import TestTabs from './TestTabs';
function VendorMain() {

  const navigate = useNavigate();
  // Customizing React icons 
  const style = { color: "white", fontSize: "45px" }

  const handlesubmit = (e) => {
    navigate("/addskill")
  }

  return (
    <div>
    {/* navbar  */}

    <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
        <div className='flex items-center'>
          <div className='m-4'><FaHouseUser style={style} /></div>
          <div  className='text-2xl hover:text-blue-500'> Vendor Hub</div>
        </div>
        <ul className='flex font-semibold'>
          <li className='px-4 hover:text-lime-500'>About Us</li>
          <li className='px-4 hover:text-lime-500'>Contact Us</li>
        </ul>
      
        <button className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3' onClick={()=>{navigate("/")}}>Log Out </button>
      </nav>
      <TestTabs/>

    </div>
  )
}

export default VendorMain