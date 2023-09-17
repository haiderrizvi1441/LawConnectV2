import React from "react";

const HomePageTest = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-purple-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Title */}
          <div className="text-white text-2xl font-semibold">LawConnect</div>

          {/* Navigation Links */}
          <ul className="flex space-x-4 text-white">
            <li className="hover:text-purple-300"><a href="#">Login</a></li>
            <li className="hover:text-purple-300"><a href="#">Cases</a></li>
            <li className="hover:text-purple-300"><a href="#">Legal Updates</a></li>
          </ul>

          {/* Search Bar */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-md outline-none"
            />
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100">
              Search
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex justify-center items-center h-full">
        <div className="bg-opacity-70 backdrop-blur-lg rounded-lg shadow-md p-6 w-full md:w-1/3">
          {/* Set the width of the form container to 75% (md:w-3/4) */}
          <h2 className="text-2xl font-semibold mb-4">Login / Register</h2>
          {/* Add your login/register form fields here */}
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-2 border rounded-md"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePageTest;

