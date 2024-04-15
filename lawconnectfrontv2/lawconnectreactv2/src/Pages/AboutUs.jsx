import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faHandshake, faUsers, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from "../Resources/Images/ProfilePicHR24.jpg"
import { useNavigate } from 'react-router-dom';
function AboutUs() {

  const navigate = useNavigate();
  return (
    <div>

      <nav className='w-full h-20 bg-slate-800 text-white flex justify-between px-4 py-2 items-center'>
        <div className='text-xl ml-3'>Law <span className='text-2xl hover:text-blue-500'>Connect.</span> </div>
        <ul className='flex font-semibold'>


        </ul>
        <div className='px-4 py-4 bg-slate-900 rounded-lg hover:font-bold cursor-pointer hover:bg-yellow-600 mr-3' onClick={(e) => navigate("/")}>Back</div>
      </nav>
      <div className="bg-gray-100">
        <section className="container mx-auto px-4 py-16 md:flex md:items-center">  
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who Am I</h2>
            <p className="text-gray-600 leading-loose p-4">
              Hi I am Haider, and I've been immersed in the world of software engineering for the past three years. Throughout my journey, I've found my true calling in Full Stack Development, where my passion truly ignites. Whether it's diving into front-end frameworks or architecting scalable back-end solutions, I find joy in every aspect of the development process. My dedication to mastering the craft drives me to continuously explore new technologies and refine my skills. As I navigate this dynamic field, I'm motivated by the opportunity to make meaningful contributions and leave a lasting impact on the ever-evolving landscape of software engineering.
            </p>
            {/* <p className="text-gray-600 mt-4">
        Please check find my CV here to check my skills and specialization. To check my other projects, please check my GITHUB Page
      </p> */}
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src={ProfilePic} alt="About Us Image" className="rounded-lg shadow-md" />
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-md md:flex md:items-center pb-8">
          <div className="w-full md:w-1/3 px-4 py-8">
            <FontAwesomeIcon icon={faRocket} className="text-5xl text-blue-500" />
            <h3 className="text-lg font-bold text-gray-800 mt-4">My Projecs</h3>
            <p className="text-gray-600 mt-2">
              Click here to check my Github Project Page.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 py-8 border-t md:border-t-0 border-gray-300">
            <FontAwesomeIcon icon={faHandshake} className="text-5xl text-green-500" />
            <h3 className="text-lg font-bold text-gray-800 mt-4">My Skills</h3>
            <p className="text-gray-600 mt-2">
              Please check my CV for a Detailed Overview of my skills.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 py-8 border-t md:border-t-0 border-gray-300">
            <FontAwesomeIcon icon={faUsers} className="text-5xl text-orange-500" />
            <h3 className="text-lg font-bold text-gray-800 mt-4">My Experience</h3>
            <p className="text-gray-600 mt-2">
              Working past 3 years in DXC Technology as a Software Engineer
            </p>
          </div>
        </section>
      </div>

    </div>

  );
}

export default AboutUs;
