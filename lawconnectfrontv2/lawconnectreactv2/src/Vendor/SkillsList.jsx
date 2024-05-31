import React ,{useContext,useEffect,useState} from 'react'
import { LoginContext } from '../context/LoginHelpContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SkillsList() {

  const navigate = useNavigate();
    const [vendorData, setVendorData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // CONTEXT DATA - VENDOR
    const loginInfo = useContext(LoginContext);
    const vendorId = loginInfo.loginData;
    console.log("In Skill list , vendor id: ", vendorId);

    useEffect(()=>{
        const fetchdata = async () =>{
            setIsLoading(true);
            setError(null);

            try {
                const response  = await axios.get(`http://localhost:9090/vendor/id/${vendorId}`);
                // if(!response.ok){
                //     throw new Error(`Error fetching vendor Datass ${response.statusText}`)
                // }
                const data = response.data;


                console.log("Normal Data",data);

                setVendorData(data);
                console.log("Your data is here", data);

            } catch (err)
            {
                setError(err.message);
                console.log("OOPS at Skill List error");

            }
            finally{
                setIsLoading(false);
            }
        }
        fetchdata();
    }, []);

    if (isLoading) {
        return <div className="text-center">Loading vendor details...</div>;
      }
    
      if (error) {
        return <div className="text-red-500">{error}</div>;
      }
    
      if (!vendorData) {
        return <div>No vendor data found for ID: {vendorId}</div>;
      }

  return (
    <div className="flex flex-col items-center p-6 pb-8"> 
    <div className="w-full max-w-md bg-slate-200 rounded-lg shadow-md p-4">  
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

      <div className="back-button-container p-6">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={(e) => navigate("/skillform")}
        >
          Add Skill
        </button>
      </div>
    </div>
  </div>
  )
}

export default SkillsList