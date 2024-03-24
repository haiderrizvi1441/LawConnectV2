import React ,{useContext,useEffect,useState} from 'react'
import { LoginContext } from '../context/LoginHelpContext';
import axios from 'axios';

function SkillsList() {
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
                const response  = await axios.get(`http://localhost:8080/vendor/id/${vendorId}`);
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
<div className="flex flex-col space-y-2">
      
      <div className="text-blue-700 text-xl font-bold mb-2">Skills:</div>
      <ul className="list-disc pl-4">
        {vendorData.skills.map((skill) => (
          <li key={skill} className="text-gray-700">
            {skill.replace(/"/g, '')}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsList