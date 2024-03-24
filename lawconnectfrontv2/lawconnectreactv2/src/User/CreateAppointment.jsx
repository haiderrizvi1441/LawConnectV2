
import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LoginContext } from '../context/LoginHelpContext';

function CreateAppointment() {
  
  const navigate = useNavigate();
  //VENDOR CONTEXT
  const loginInfo = useContext(LoginContext);
  const vendorId = loginInfo.loginData;
  console.log("Appointment Req: [VENDOR ID]: ", vendorId);
  
  // SETTING VALUE TO CUSTOMER CONTEXT  
  const customerloginInfo = useContext(LoginContext);
  const customerId = loginInfo.userLoginData;
  console.log("CONTEXT customer id: ", customerId);

  // Desciption
  const [desc, setDesc] = useState('');
  
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  }

  // CALENDER CONFIG
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const getJsonFormattedDate = (date) => {
    if (!date) return null;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    const hours = '00'; 
    const minutes = '00'; 
    const seconds = '00'; 
    const milliseconds = '000'; 

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  };

  const resdate = getJsonFormattedDate(selectedDate);


  // APPOINTMENT SUBMIT
  const bookAppoint = async (e) => {
    e.preventDefault();
    // Provide the Backend API with its info 
    // customerid: Set at Login, used here throught CONTEXT
    // Vendorid : Set at VendorCards clicked , used here throught CONTEXT
    // datetime : Input taken through Calender
    // Description : Taken through Input 

    // Creating appointment through Backend API
    try{
      const response = await axios.post(`http://localhost:8081/appointments/createAppointment` ,{
        "customerId": customerId,
        "vendorId": vendorId,
       "description": desc,
      "dateTime" : resdate
      }); 
      console.log("data",response.data)
      window.alert("Appointment Created Successfully")
      navigate("/userhome");
    }
    catch(error){
      alert(error.response.data); 
    }


  }

  // TOAST 
  const appointmentsuccess = () => {
    return(
      <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ms-3 text-sm font-normal">Appointment booked successfully.</div>
    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
    )
  }

 return (
   <div className="create-appointment-container">
   <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
                <div className='text-xl ml-3'>Law <span className='text-2xl hover:text-blue-500'>Connect.</span> </div>
                <ul className='flex font-semibold'>
                  
                    <li className='px-4 hover:text-lime-500'>About Us</li>
                    <li className='px-4 hover:text-lime-500'>Contact Us</li>

                </ul>
                <div className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3' onClick={(e)=>navigate("/userhome")}>Back</div>

            </nav>
            
     <div className="calender-appointment" style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  padding: '10px', margin: '20px' }}>
     <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set a Date</p>
     <div className="flex flex-col space-y-6">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center">
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy" // Adjust date format as needed
          className="text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {selectedDate && (
          <p className="mt-4 text-sm text-gray-500">
            Selected date in JSON format: {getJsonFormattedDate(selectedDate)}
          </p>
        )}
      </div>


    </div>
     </div>
     <form class="max-w-sm mx-auto">
       <div class="mb-5">
         <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write your Description of the issue.</label>
         <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          onChange= {handleDescChange} value = {desc}
         />
       </div>
       <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={bookAppoint} >Finalize Appointment</button>
     </form>

     

     
   </div>
 );
}

export default CreateAppointment;
