import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import genericprofile from "../Resources/Images/genericprofile.png";
import { useEffect } from 'react';
import axios from 'axios';


function AdminVendorCards() {

    const navigate = useNavigate();

    // Function to Create Indivisual Cards
    const VendorCard = ({ vendor }) => {
        console.log("ok")   

        return (
            

            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-end px-4 pt-4">

                </div>
                <div class="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={genericprofile} alt="Generic profile" />


                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{vendor.firstname} {vendor.lastname}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Lawyer</span>
                    <div class="flex mt-4 space-x-3 md:mt-6">
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Profile</button>
                        <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>
                    </div>
                </div>
            </div>

        )



    }


    const [vendors, setVendors] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8082/admin/getallbyrole/VENDOR");
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

        <div>
            {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor}/>

            ))}

        </div>
    )
}

export default AdminVendorCards