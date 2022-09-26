import React from "react";
import { FaAccusoft } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 p-4 h-screen w-64 m-0 bg-white dark:bg-gray-800 dark:text-white">
      <div className="flex items-center p-4">
        <FaAccusoft size={37} className="text-green-400" />
        <p className="ml-10 text-gray-900 tracking-widest font-bold dark:text-white">
          TASKY
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
