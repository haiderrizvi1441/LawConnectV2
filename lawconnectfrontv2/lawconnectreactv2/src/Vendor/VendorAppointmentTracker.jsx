import React,{useContext, useEffect, useState} from 'react'
import { LoginContext } from '../context/LoginHelpContext'
import axios from 'axios';

function VendorAppointmentTracker() {

    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState();
   
    // Getting the vendorId from Context
    const vendorloginInfo = useContext(LoginContext);
    const vendorId = vendorloginInfo.loginData;
    console.log("CONEXT vendor id:", vendorId);

    useEffect(()=>{
        const getAppointmentList = async (e) => {
            setIsLoading(true);
            setError(null);

            try{
                const response = await axios.get(`http://localhost:8081/appointments/getallbyvendorid/${vendorId}`);
            
                setAppointments(response.data);
                console.log("Appointment Data: ", appointments);
            }
            catch(error){
                alert(error.response.data);
                setError(error.response.data || "An error occured while fetching appointments");
            }
            finally{
                setIsLoading(false);

            }
        }
        getAppointmentList();
    },[vendorId]);




      // Date Format Helper
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        return date.toLocaleDateString('en-US', options); // Adjust locale as needed
    }

    const formattedDate = formatDate("2024-03-08T00:00:00");
    console.log(formattedDate); // Output: March 8, 2024

    // Update Button Funtionality 
    const updateAppointment = async (appointmentId) => {
        setIsLoading(true);
        try{
            const response = await axios.post(`http://localhost:8081/appointments/${appointmentId}`,
            selectedStatus
            );
            if(response.status === 200){
                setAppointments(appointments.map((appt) => appt.appointmentId === appointmentId ? { ...appt, status: selectedStatus } : appt))
                console.log("Appointment Updated",)
            }
            else{
                setError("An Error occured while updating status");
            }
        }
        catch(error){
            setError(error.response.data || "An error occured while updating status")
        }
        finally{
            setIsLoading(false);
        }
    }

    const renderAppointmentCard = (appointment) => (
        <div
            key={appointment.appointmentId}
            className="bg-white rounded shadow-md overflow-hidden hover:bg-gray-100 transition-all duration-300 ease-in-out flex flex-col p-4" // Hover animation class added
        >
            <h3 className="text-lg font-medium text-gray-900">{appointment.description}</h3>
            <br />
            <p className="text-gray-600 mt-2">
                Status: {appointment.status}
            </p>
            <p className="text-gray-600 mt-2">
                Appointment Id: {appointment.appointmentId}
            </p>
            <p className="text-gray-600 text-sm mt-2">
                When: {formatDate(appointment.dateTime)}
            </p>

            <div className='status-dropdown'>
            <select
          value={selectedStatus}
          onChange={(event) => {setSelectedStatus(event.target.value)
                                console.log("This is status::::::::",selectedStatus)}}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="PENDING">PENDING</option>
          <option value="ACCEPTED">ACCEPTED</option>
          <option value="WORKING">WORKING</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
            </div>
            <div className="flex justify-center items-center p-6">
           
                <button
                    className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={()=>{updateAppointment(appointment.appointmentId)}}
                
                >
                    <span className="flex items-center justify-center ">Update Status</span>
                </button>
            </div>

        </div>
    );

    



    if (isLoading) {
        return <p>Loading appointments...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!appointments.length) {
        return <p>You have no appointments yet.</p>;
    }





  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4'>
        {appointments.map(renderAppointmentCard)}
    </div>
  )
}

export default VendorAppointmentTracker