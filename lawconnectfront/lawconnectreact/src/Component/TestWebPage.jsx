import React from 'react'
import village from '../Resources/Images/lc-village.jpg'
import village2 from '../Resources/Images/lc-village2.jpg'
import briefcase from '../Resources/Icons/briefcaseIcon.svg'
import pen from '../Resources/Icons/penIcon.svg'
import services from '../Resources/Icons/servicesIcon.svg'
import duedill from '../Resources/Icons/dueDilligence.svg'
import advocacy from '../Resources/Icons/caseAdvocacyIcon.svg'
import drafting from '../Resources/Icons/draftingIcon.svg'
import advice from '../Resources/Icons/legalAdviceIcon.svg'

function TestWebPage() {
    return (
        <div className='bg-teal-500 w-screen h-screen'>

            {/* Navbar starts here  */}
            <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
                <div className='text-xl ml-3'>Law <span className='text-2xl hover:text-blue-500'>Connect.</span> </div>
                <ul className='flex font-semibold'>
                    <li className='px-4'>Home</li>
                    <li className='px-4'>About Us</li>
                    <li className='px-4'>Contact Us</li>
                </ul>
                <div className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3'>Login/Sign Up</div>
            </nav>

            {/* Hero Section Starts here  */}

            <div className='Hero w-full'>
                {/* Image Section  */}
                <div className='imagesection'>
                    <img className='w-full' src={village} alt="village" />
                    {/* <img src={village2} alt="village2" /> */}
                </div>

                {/*     QUOTE SECTION */}
                <div className='lawyersection h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 bg-slate-900'>

                    {/* Hero Text Material  */}
                    <div className='w-full h-auto flex flex-wrap flex-col items-center text-center p-10'>
                        <p className='text-yellow-300 font-bold text-2xl'>"Connecting Indian Legal System to Everyone!</p>
                        <div className='text-lime-300 font-bold text-4xl'>______</div>
                    </div>

                    {/* SERVICE SECTION */}
                    <div className='w-full flex flex-wrap justify-evenly'>
                        <div className='w-46 flex flex-col items-center mb-12'>
                            <img className='w-28 h-28' src={briefcase} alt="Briefcase icon" />
                            <p className='text-3xl font-bold text-white'>500+</p>
                            <p className='text-xl font-bold text-green-100'>Different Legal Vendors</p>
                        </div>
                        <div className='w-46 flex flex-col items-center mb-12'>
                            <img className='w-28 h-28' src={pen} alt="Pen icon" />
                            <p className='text-3xl font-bold text-white'>Free !</p>
                            <p className='text-xl font-bold text-green-100'>First Case Drafting</p>
                        </div>
                        <div className='w-46 flex flex-col items-center mb-12'>
                            <img className='w-28 h-28' src={services} alt="Services icon" />
                            <p className='text-3xl font-bold text-white'>100+</p>
                            <p className='text-xl font-bold text-green-100'>Different Legal Services</p>
                        </div>
                    </div>

                    {/* PRODCUT SECTION  */}
                    <div className='w-full h-auto flex flex-wrap flex-col items-center text-center p-10'>
                        <p className='text-yellow-300 font-bold text-2xl'>"Our Products & Services"</p>
                        <div className='text-lime-300 font-bold text-4xl'>______</div>
                    </div>
                    {/* Product Cards  */}
                    <div className='w-full flex flex-wrap justify-evenly'>
                        <div className='w-46 flex flex-col items-center mb-12 border-white border-2 p-2 rounded-xl'>
                            <img className='w-20 h-20' src={duedill} alt="Due Dilligence" />
                            <p className='text-2xl font-bold text-white'>Due Dilligence</p>
                            <p className='text-sm font-bold text-lime-200'> Mergers and Aquisitions</p>
                        </div>
                        <div className='w-46 flex flex-col items-center mb-12 border-white border-2 p-2 rounded-xl'>
                            <img className='w-20 h-20' src={advocacy} alt="Case Advocacy" />
                            <p className='text-2xl font-bold text-white'>Case Advocacy</p>
                            <p className='text-sm font-bold text-lime-200'> Helps Wins Cases</p>
                        </div>
                        <div className='w-46 flex flex-col items-center mb-12 border-white border-2 p-2 rounded-xl'>
                            <img className='w-20 h-20' src={drafting} alt="Drafting" />
                            <p className='text-2xl font-bold text-white'>Drafting</p>
                            <p className='text-sm font-bold text-lime-200'> Drafting Support</p>
                        </div>
                        <div className='w-46 flex flex-col items-center mb-12 border-white border-2 p-2 rounded-xl'>
                            <img className='w-20 h-20' src={advice} alt="Legal Advice" />
                            <p className='text-2xl font-bold text-white'>Legal Advice</p>
                            <p className='text-sm font-bold text-lime-200'> Advisory Support</p>
                        </div>
                    </div>


                </div>

            </div>

            {/* FOOTER SECTION  */}

            <div className='w-full bg-gray-600 px-4 text-white '>

                <div className='w-full bg-gray-600 px-4 text-white pt-10 pb-6 flex flex-row flex-wrap justify-between'>
                    <p className='text-sm text-white font-bold p-1 '>About us</p>
                    <p className='text-sm text-white font-bold p-1'>Careers</p>
                    <p className='text-sm text-white font-bold p-1'>Legal Certificates</p>
                    <p className='text-sm text-white font-bold p-1'>Support Us</p>
                    <p className='text-sm text-white font-bold p-1'>Contact Us</p>
                </div>

                <p className='font-bold'>
                © Haider Rizvi 2023
                </p>




            </div>



        </div>
    )
}

export default TestWebPage