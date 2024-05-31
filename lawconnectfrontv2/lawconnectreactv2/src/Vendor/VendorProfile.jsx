import React, { useContext, useEffect, useState } from 'react'
import MaleGenericProfile from '../Resources/Images/malegp.jpg'
import { IoIosBriefcase } from 'react-icons/io'
import {useNavigate} from 'react-router-dom';
import { LoginContext } from '../context/LoginHelpContext';
import axios from 'axios';

// ProfilePage.js


function VendorProfile(){

    const navigate = useNavigate();
    const style = { color: "white", fontSize: "45px" }
    const [vendorData, setVendorData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // Setting VendorId using VendorContext
    const vendorlogininfo = useContext(LoginContext);
    const vendorId = vendorlogininfo.loginData;
    console.log("Context vendor id: ", vendorId);

    useEffect(() => {
      const getVendorDetails = async (e) => {
        try{
          const response = await axios.get(`http://localhost:9090/vendor/id/${vendorId}`);
          console.log('Response Data: ', response.data);
          const {id, firstname, lastname, email, role} = response.data;
          setVendorData({id, firstname, lastname, email, role});
          console.log("Set Vendor Data at Profile: " , vendorData); 
        }
        catch(error){
          alert(error.response.data)
        }
        finally{
          setIsLoading(false);
        }
      };
      getVendorDetails();
    },[])

  return (
    isLoading ? (
      <div className="bg-gray-300 m-4 flex justify-center items-center">
        <h2 style={{ color: 'white', fontSize: '45px' }}>Loading...</h2>
      </div>
    ) : (
      <div>
        {/* Profile Hero */}
        <div className="bg-gray-300 m-4">
          <div className="p-4 shadow-lg rounded-lg">
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
                <h1 className="text-2xl font-semibold">
                  Welcome, {vendorData.firstname} {vendorData.lastname}
                </h1>
                {/* User email below the name */}
                <h3 className="customer-email">{vendorData.email}</h3>
              </div>
            </div>
          </div>

          {/* Current Balance section */}
          <div className="mt-4 p-4 shadow-lg rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Current Balance : ₹ 5000 </h2>
              {/* Add button for adding balance */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Balance
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};



export default VendorProfile