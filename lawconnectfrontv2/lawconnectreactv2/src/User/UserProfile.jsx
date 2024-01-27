import React from 'react'
import MaleGenericProfile from '../Resources/Images/malegp.jpg'
import { IoIosBriefcase } from 'react-icons/io'
import {useNavigate} from 'react-router-dom';

function UserProfile(props) {
    const navigate = useNavigate();
    const style = { color: "white", fontSize: "45px" }
  return (

    <div>
        {/* Navbar  */}
        <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
        <div className='flex items-center'>
          <div className='m-4'><IoIosBriefcase style={style} /></div>
          <div  className='text-2xl'> Profile Information</div>
        </div>
        <ul className='flex font-semibold'>
          <li className='px-4 hover:text-lime-500'>About Us</li>
          <li className='px-4 hover:text-lime-500'>Contact Us</li>
          <li on onClick={()=>{navigate("/adminhome")}} className='px-4 hover:text-lime-500'> >> Back To Home</li>
        </ul>
        
        <button className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3' onClick={() => {navigate("/")}}>Log Out</button>
      </nav>
    
    {/* Profile Hero  */}
    <div className="bg-gradient-to-br from-blue-400 to-purple-500">

    
    <div className=" p-4 shadow-lg rounded-lg">
      <div className="flex items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
          {/* Add your profile picture here */}
          <img
            src={MaleGenericProfile}
            alt="Male Generic Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4">
          {/* User name */}
          <h1 className="text-2xl font-semibold">{props.firstname}</h1>
        </div>
      </div>
      </div>
      
      {/* Skills table */}
      {/* <table className="mt-6 w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-3 text-lg font-semibold border-b border-gray-300">Skills</th>
              <th className="py-3 text-lg font-semibold border-b border-gray-300">Level</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-2 text-lg">React.js</td>
              <td className="py-2 text-lg">Advanced</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 text-lg">Tailwind CSS</td>
              <td className="py-2 text-lg">Intermediate</td>
            </tr>

          </tbody>
        </table> */} 

        <div className="mt-6 w-full flex justify-center">
  <table className="bg-white w-3/4 border border-gray-300 rounded-lg">
    <thead>
      <tr>
        <th className="py-3 text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-white border border-gray-300">
          Skills
        </th>
        <th className="py-3 text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-white border border-gray-300">
          Level
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-2 text-lg border border-gray-300">React.js</td>
        <td className="py-2 text-lg border border-gray-300">Advanced</td>
      </tr>
      <tr>
        <td className="py-2 text-lg border border-gray-300">Tailwind CSS</td>
        <td className="py-2 text-lg border border-gray-300">Intermediate</td>
      </tr>
      {/* Add more skills here */}
    </tbody>
  </table>
</div>

    </div>
    </div>
  );
};

export default UserProfile