import React, { useState } from 'react';
import { HiUserCircle,HiAdjustments } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import UserProfile from './UserProfile';
import UserDashBoard from './UserDashBoard';
import CustomerAppointmentTracker from './CustomerAppointmentTracker';

function TabsUser() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: HiUserCircle, title: "Profile" },
    { icon: MdDashboard, title: "Dashboard" },
    { icon: HiAdjustments, title: "All Vendors" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <UserProfile />; // Render UserProfile when "Profile" is selected
      case 1:
        return <CustomerAppointmentTracker/>; // Render DashBoard when "Dashboard" is selected
      case 2: 
        return <UserDashBoard/>  // Render When all Vendor is Selected
      default:
        return null;
    }
  };

  return (
    <div className="mx-4">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex" aria-label="Tabs with underline">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
              } whitespace-nowrap py-6 px-4 border-b-2 font-medium text-lg`}
            >
              {tab.icon && <tab.icon className="w-8 h-8 mr-2 inline" />}
              {tab.title}
            </button>
          ))}
        </nav>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}

export default TabsUser;
