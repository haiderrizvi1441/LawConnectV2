import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddSkill() {

    const navigate = useNavigate();
  return (
    <div>
        {/* Navbar  */}
        <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
                <div className='text-2xl hover:text-blue-500'>Skills & Specialization</div>
            
                <div className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3' onClick={(e)=>navigate("/skillform")}>Add Skills</div>
            </nav>
    </div>
  )
}

export default AddSkill