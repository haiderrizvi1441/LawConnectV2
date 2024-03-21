import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react';
import { useLogin, LoginContext } from '../context/LoginHelpContext';
function SkillForm() {

    const navigate = useNavigate();
    const [selectedSkill, setSelectedSkill] = useState('');
    const [message, setMessage] = useState('');

    // CONTEXT DATA 
    const logininfo = useContext(LoginContext);
    console.log("This is Context Data", logininfo.loginData);
    const vendorId = logininfo.loginData;



    const handleSubmit = async (e) => {
        e.preventDefault();
        // if(!selectedSkill){
        //     setMessage("Please select a skill.");
        //     return;
        // }
        try{
            const response = await fetch(`http://localhost:8080/vendor/${vendorId}/addskill`, {
                method: 'POST',
                body: JSON.stringify(selectedSkill),
                headers: {'Content-Type': 'application/json'},
            });

            if(response.ok){
                const updatedVendor = await response.json();
                setMessage("The Skill is added successfully");
                setSelectedSkill(''); // Clear the Selected Skill
            }
            // Else set the message as backend error 
            else{
                const error = await response.text();
                setMessage(error);
            }
        }
        catch(error){
            console.error(error);
            setMessage("An Error Occured , Please try again");
        }

        // Add the skill to Vendor profile
        // if skill already added "message- already added" , else add and show sucess message 
        
        // Display the success message
        // setMessage("The Skill is added sucessfully.");
    }


    return (
        <div>
            {/* Navbar */}
            <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
                <div className='text-2xl hover:text-blue-500'>Adding your skills here ....</div>

                <div className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3' onClick={(e) => navigate("/vendorhome")}>Back to Profile</div>
            </nav>
            {/* Banner  */}

            {/* Form  */}

            <div className="max-w-sm mx-auto p-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="skills" className="block mb-5 text-xl font-medium text-gray-900 dark:text-white">
                        Select your Skills
                    </label>
                    <select
                        id="skills"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setSelectedSkill(e.target.value)}
                        value={selectedSkill}
                    >
                        <option value="" disabled hidden>
                            Choose your skills
                        </option>
                        <option value="Litigation">Litigation</option>
                        <option value="Drafting">Drafting</option>
                        <option value="Legal Advice">Legal Advice</option>
                        <option value="Due Dilligence">Due Dilligence</option>
                    </select>

                    <button
                        type="submit"
                        className="mt-4 bg-slate-700 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Add Skill
                    </button>
                </form>

                {message && <p className="mt-4 text-green-500">{message}</p>}
            </div>


        </div>
    )
}

export default SkillForm