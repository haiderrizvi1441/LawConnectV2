import React , {useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginHelpContext';
import axios from 'axios';
import MaleGenericProfile from '../Resources/Images/malegp.jpg';
import { IoIosBriefcase } from 'react-icons/io';

function AdminProfile() {
    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    const style = { color: 'white', fontSize: '45px' };
  
    // Setting customerId using CustomerContext
    const adminlogininfo = useContext(LoginContext);
    const adminId = adminlogininfo.adminLoginData;
    console.log('Context customer id: ', adminId);
  
    useEffect(() => {
      const getUserDetails = async (e) => {
        try {
          const response = await axios.get(`http://localhost:9090/admin/id/${adminId}`);
          console.log('Response Data: ', response.data);
          const { id, firstname, lastname, email, role } = response.data;
          console.log(id, firstname, lastname);
          setCustomerData({ id, firstname, lastname, email, role });
          console.log('Yellow: ', customerData);
        } catch (error) {
          alert(error.response.data);
        } finally {
          setIsLoading(false);
        }
      };
      getUserDetails();
    }, []);
  
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
                    Welcome, {customerData.firstname} {customerData.lastname}
                  </h1>
                  {/* User email below the name */}
                  <h3 className="customer-email">{customerData.email}</h3>
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
  }

export default AdminProfile