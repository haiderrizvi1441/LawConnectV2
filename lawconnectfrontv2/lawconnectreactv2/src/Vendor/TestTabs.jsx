import React, { useState } from 'react';
import { HiUserCircle, HiAdjustments } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import SkillsList from './SkillsList';

function TestTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: HiUserCircle, title: "Dashboard" },
    { icon: MdDashboard, title: "Skills" },
    { icon: HiAdjustments, title: "Balance" },
  ];

  return (
    <div className="mx-4">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex" aria-label="Tabs with underline">
          <button
            onClick={() => setActiveTab(0)}
            className={`${
              activeTab === 0
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
            } whitespace-nowrap py-6 px-4 border-b-2 font-medium text-lg`}
          >
            <HiUserCircle className="w-8 h-8 mr-2 inline" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`${
              activeTab === 1
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
            } whitespace-nowrap py-6 px-4 border-b-2 font-medium text-lg`}
          >
            <MdDashboard className="w-8 h-8 mr-2 inline" />
            Skills
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`${
              activeTab === 2
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
            } whitespace-nowrap py-6 px-4 border-b-2 font-medium text-lg`}
          >
            <HiAdjustments className="w-8 h-8 mr-2 inline" />
            Balance
          </button>
        </nav>
      </div>
      <div>
        <div
          className={`${
            activeTab === 0 ? "block" : "hidden"
          } px-4 py-2 bg-white dark:bg-gray-800`}
        >
          <p>
            This is
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </span>
            .
            Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`${
            activeTab === 1 ? "block" : "hidden"
          } px-4 py-2 bg-white dark:bg-gray-800`}
        >
          <p>
            This is
            <span className="font-medium text-gray-800 dark:text-white">
              Skills tab's associated content
            </span>
            
        
          </p>
          <SkillsList/>
        </div>
        <div
          className={`${
            activeTab === 2 ? "block" : "hidden"
          } px-4 py-2 bg-white dark:bg-gray-800`}
        >
          <p>
            This is
            <span className="font-medium text-gray-800 dark:text-white">
              Balance tab's associated content
            </span>
            .
            Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestTabs;
