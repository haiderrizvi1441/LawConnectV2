import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/LoginHelpContext';
import axios from 'axios';

function CustomerAppointmentTracker() {


    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Getting the CustomerId from Context
    const customerloginInfo = useContext(LoginContext);
    const customerId = customerloginInfo.userLoginData;
    console.log("CONTEXT customer id: ", customerId);

    useEffect(() => {
        const getAppointmentList = async (e) => {
            // e.preventDefault();
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost:8081/appointments/getallbycustomerid/${customerId}`);

                const appointmentdata = response.data;
                setAppointments(appointmentdata);
                console.log("Appoint Data", appointmentdata);

            }
            catch (error) {
                alert(error.response.data);
                setError(error.response.data || "An Error occured while fetching appointments")
            }
            finally {
                setIsLoading(false);
            }
        };
        getAppointmentList();

    }, [customerId]);

    // Delete Function 
    const deleteAppointment = async (appointmentId) => {
        setIsLoading(true);
        try {
          await axios.delete(`http://localhost:8081/appointments/${appointmentId}`);
          const updatedAppointments = appointments.filter(
            (appointment) => appointment.appointmentId !== appointmentId
          );
          setAppointments(updatedAppointments);
        } catch (error) {
          alert(error.response.data.message || "Error deleting appointment");
          setError("Failed to delete appointment");
        } finally {
          setIsLoading(false);
        }
      };

      
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
            <div className="flex justify-center items-center p-6">
                <button
                    className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => deleteAppointment(appointment.appointmentId)}
                >
                    <span className="flex items-center justify-center">Delete</span>
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

export default CustomerAppointmentTracker