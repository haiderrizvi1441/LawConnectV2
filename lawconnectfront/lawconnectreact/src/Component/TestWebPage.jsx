import React from 'react'

function TestWebPage() {
    return (
        <div className='bg-teal-500 w-screen h-screen'>

            {/* Navbar starts here  */}
            <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
                <div className='text-xl'>Law <span className='text-2xl hover:text-blue-500'>Connect.</span> </div>
                <ul className='flex font-semibold'>
                    <li className='px-4'>Home</li>
                    <li className='px-4'>About Us</li>
                    <li className='px-4'>Contact Us</li>
                </ul>
                <div className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600'>Login/Sign Up</div>
            </nav>

            {/* Hero Section Starts here  */}
            <div className=''>
        
            </div>



        </div>
    )
}

export default TestWebPage