import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    const [sentmessage, setSentMessage] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`http://localhost:9090/contactinfo/`,{
                "email":email,
                "message":message

            })
            console.log("Response data ", response.data);
        }
        
        catch(error){
            console.log(error);
        }
        finally{
            
        }

        setSentMessage("Message Received, We will get back to you shortly");
        setEmail('');
        setMessage('');

        
    };

    return (
        <div className='main-container'>
            {/* Navbar */}
            <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
                <div className='text-xl ml-3'>Law <span className='text-2xl hover:text-blue-500'>Connect.</span> </div>
                <ul className='flex font-semibold'></ul>
                <div className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3' onClick={(e) => navigate("/")}>Back</div>
            </nav>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" />
                </div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                <div className='form-button p-3'>
                    <button type="submit" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        Send
                    </button>
                </div>
            </form>

            <div className="flex justify-center items-center">
                <div className="message text p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 flex-shrink-0 w-1/2">
                    {sentmessage}
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
