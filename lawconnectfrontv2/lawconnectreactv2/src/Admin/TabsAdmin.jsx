import React, { useState } from 'react';
import { HiAdjustments, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import AdminContactTracker from './AdminContactTracker';
import AdminProfile from './AdminProfile';
import AdminUserCards from './AdminUserCards';
import AdminVendorCards from './AdminVendorCards';
function TabsAdmin() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: HiUserCircle, title: "Profile" },
    { icon: MdDashboard, title: "Dashboard" },
    { icon: HiAdjustments, title: "All Vendors" },
    { icon: HiAdjustments, title: "All Customers" }

  ];

  return (
    <div className="mx-4">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex" aria-label="Tabs with underline">
          <button
            onClick={() => setActiveTab(0)}
            className={`${activeTab === 0
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
              } whitespace-nowrap py-6 px-4 border-b-2 font-medium text-lg`}
          >
            <HiUserCircle className="w-8 h-8 mr-2 inline" />
            Profile
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`${activeTab === 1
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
              } whitespace-nowrap py-6 px-4 border-b-2 font-medium text-lg`}
          >
            <MdDashboard className="w-8 h-8 mr-2 inline" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`${activeTab === 2
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
              } whitespace-nowrap py-6 px-4 border-b-2 font-medium text-lg`}
          >
            <HiAdjustments className="w-8 h-8 mr-2 inline" />
            All Vendors
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`${activeTab === 3
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
              } whitespace-nowrap py-6 px-4 border-b-2 font-medium text-lg`}
          >
            <HiAdjustments className="w-8 h-8 mr-2 inline" />
            All Customers
          </button>
        </nav>
      </div>
      <div>
        <div
          className={`${activeTab === 0 ? "block" : "hidden"
            } px-4 py-2 bg-white dark:bg-gray-800`}
        >

          <AdminProfile />
        </div>
        <div
          className={`${activeTab === 1 ? "block" : "hidden"
            } px-4 py-2 bg-white dark:bg-gray-800`}
        >

          <AdminContactTracker />
        </div>
        <div
          className={`${activeTab === 2 ? "block" : "hidden"
            } px-4 py-2 bg-white dark:bg-gray-800`}
        >

          <AdminVendorCards />
        </div>
        <div
          className={`${activeTab === 3 ? "block" : "hidden"
            } px-4 py-2 bg-white dark:bg-gray-800`}
        >

          <AdminUserCards />
        </div>
      </div>
    </div>
  );
}
export default TabsAdmin;
