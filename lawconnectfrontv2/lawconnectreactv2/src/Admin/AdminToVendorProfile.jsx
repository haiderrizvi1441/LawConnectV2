import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfilePic from "../Resources/Images/malegp.jpg";
import { useParams, useNavigate } from 'react-router-dom';
import BackPic from "../Resources/Images/lc-village2.jpg"


const AdminToVendorProfile = () => {
    const { id } = useParams();
    const [vendorData, setVendorData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/vendor/id/${id}`);
                setVendorData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div className="p-4 text-center">Loading Vendor Data...</div>;
    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">

            <div className="w-full max-w-md bg-slate-200 rounded-lg shadow-md p-4">
                <div className="flex flex-col items-center mb-4">
                    <img
                        className="w-24 h-24 rounded-full mx-auto mb-2 hover:scale-110"
                        src={ProfilePic}
                        alt="Profile Pic"
                    />
                    <h1 className="text-2xl font-bold text-center hover:scale-110">{`${vendorData.firstname} ${vendorData.lastname}`}</h1>
                    <h2 className='font-bold hover:scale-110'>{`Email : ${vendorData.email}`}</h2>
                </div>
                <table className="w-full rounded-lg shadow-md overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 text-center font-medium">
                            <th className="p-2">Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendorData.skills &&
                            vendorData.skills.map((skill) => (
                                <tr key={skill} className="border-b hover:bg-red-500 hover:text-white hover:scale-110">
                                    <td className="p-2">{skill.replace(/"/g, '')}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>


            </div>
            <div className='back-button-container p-6'>
            <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={(e) => {navigate("/adminhome")}}> Back</button>

            </div>



        </div>
    );
};

export default AdminToVendorProfile;
