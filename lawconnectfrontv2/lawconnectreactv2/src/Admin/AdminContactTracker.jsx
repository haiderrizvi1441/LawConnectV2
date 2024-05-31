import React, {useState, useEffect} from 'react'
import axios from 'axios';


function AdminContactTracker() {

  const [contactInfos, setContactInfos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(()=>{
    
    const fetchData = async () =>{

      try{
        const response = await axios.get(`http://localhost:9090/contactinfo/getallcontactinfo`);
        setContactInfos(response.data); // List of Contact Info
        console.log("This is the contact data: ", response.data )
      }
      catch(error){
        console.error("Error Fetching Data: ", error);
        setError(error); // to show at main page 
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchData();
  },[]);

  // DELETE FUNCTION
  const deleteContactCard = async (id) =>{
    setIsLoading(true);

    try{
      await axios.delete(`http://localhost:9090/contactinfo/${id}`);
      console.log("Deeleted Succuessffllly")
      const updatedContactInfos = contactInfos.filter(
        (contactInfo) => contactInfo.id !== id
      );
      setContactInfos(updatedContactInfos); 
    }
    catch(error){
      console.error(error);
    }
    finally{
      setIsLoading(false);
    }
  }
  


  //  CARD RENDERING 
  const renderContactCard = (contactInfo) => (
    <div
            key={contactInfo.id}
            className="bg-white rounded shadow-md overflow-hidden hover:bg-gray-100 transition-all duration-300 ease-in-out flex flex-col p-4" // Hover animation class added
        >
            <h3 className="text-lg font-medium text-gray-900">{contactInfo.id}</h3>
            <br />
        
            <p className="text-gray-600 mt-2">
                From: {contactInfo.email}
            </p>
            <p className="text-gray-600 text-sm mt-2 border-lime-700">
              {contactInfo.message}
            </p>
            <div className="flex justify-center items-center p-6">
                <button
                    className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => deleteContactCard(contactInfo.id)}
                >
                    <span className="flex items-center justify-center">Delete</span>
                </button>
            </div>

        </div>
  );

  if(isLoading){
    return <p>Loading Messages...</p>
  }
  if(error){
    return <p className = "text-red-500">{error}</p>
  }
  if (!contactInfos.length){
    return <p>You have no message yet.</p>
  }


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4'>
    {contactInfos.map(renderContactCard)}

</div>
  )

}


export default AdminContactTracker;