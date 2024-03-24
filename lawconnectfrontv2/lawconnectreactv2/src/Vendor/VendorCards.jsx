import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import genericprofile from "../Resources/Images/genericprofile.png";
import axios from 'axios';
import { LoginContext,Provider, useLogin } from '../context/LoginHelpContext';

function VendorCards() {
    const navigate = useNavigate();
    const [vendors, setVendors] = useState([]);



    // Function to Create Indivisual Cards
    const VendorCard = ({ vendor }) => {
        console.log("ok")
        
        const handleButtonClick = () => {
            navigate(`/toVendorProfile/${vendor.id}`);
        }

        return (


            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
                <div class="flex justify-end px-4 pt-4">

                </div>
                <div class="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={genericprofile} alt="Generic profile" />


                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{vendor.firstname} {vendor.lastname}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Lawyer</span>
                    <div class="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-3 mt-4">
                        <button class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{
                            handleSubmit();
                            logins.setLoginData(vendor.id); 
                                }}
                            >Book Appointment</button>
                        <button onClick={handleButtonClick} class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">See Vendor Profile</button>

                    </div>
                </div>
            </div>
        )
    }

    // HandleSubmit Functionality - When clicked , change the vendor context to current vendorId, 
    // VENDOR CONTEXT setting
    const logins = useLogin();
    


    const handleSubmit = async (e) => {

        navigate("/createappointment");
  
        
        
    }




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/vendor/allVendors");
                setVendors(response.data); // List of Vendors
                console.log("Response Data below")
                console.log(response.data)
            }
            catch (error) {
                console.error("Error Fetching data: ", error)
            }
        };
        fetchData();
    }, []);

    // Mapping the List of Vendors to the Card Function
    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4'>
            {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />

            ))}

            

        </div>
    )
}

export default VendorCards