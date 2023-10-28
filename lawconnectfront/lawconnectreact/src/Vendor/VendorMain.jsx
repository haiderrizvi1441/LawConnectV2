import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react';
import { FaHouseUser } from 'react-icons/fa'

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

      
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hello Lawyer</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Add you skills and start getting customers.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button onClick={handlesubmit} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              
            </button>
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VendorMain