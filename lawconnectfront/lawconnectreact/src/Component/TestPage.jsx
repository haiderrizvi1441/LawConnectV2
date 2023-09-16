import React from 'react'
import Ferrari from "../Resources/ferrari-lopg.png"
function TestPage() {
    return (
        <div className='main-ctn'>

            <div className='bg-slate-900 grid place-content-center h-screen'>
                <h1 className='text-white text-4xl m-6 hover:text-yellow-500'>Book a car</h1>

                {/* Main Page Content */}
                <div className=' main-body'>
                    <div className='p-6 max-w-sm mx-auto bg-white rounded-3xl shadow-lg flex items-center space-x-4'>
                    <div>
                        <img className="h-22 w-20" src={Ferrari} alt="main-logo" />
                    </div>
                    <div className='text-xl font-medium'>
                        <div>Ferrari AutoMobilli</div>
                        <p className='text-red-700'>Italian Transportini</p>
                    </div>
                    </div>
                </div>

                <button className='bg-slate-700 text-yellow-400 text-lg  mt-2 rounded-md p-2 hover:bg-slate-800'>Book Now</button>


            </div>
        </div>
    )
}

export default TestPage