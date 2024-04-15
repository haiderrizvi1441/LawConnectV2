import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import { FaHouseUser } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom';
import TabsHome from './TabsUser';




function UserMain() {

  // Customizing React icons 
  const style = { color: "white", fontSize: "45px" }
  const navigate = useNavigate();

  

  return (
    <div>
      {/* navbar  */}

      <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
        <div className='flex items-center'>
          <div className='m-4'><FaHouseUser style={style} /></div>
          <div  className='text-2xl hover:text-blue-500'> User Hub</div>
        </div>
        <ul className='flex font-semibold'>
          <li className='px-4 hover:text-lime-500' onClick={()=>{navigate("/aboutus")}}>About Us</li>
          <li className='px-4 hover:text-lime-500'>Contact Us</li>
        </ul>
      
        <button className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3' onClick={() => {navigate("/")}}>Log Out</button>
      </nav>

      {/* Main Page  */}
      {/* Tabs  */}
      <TabsHome/>
      
      

    </div>
  )
}

export default UserMain