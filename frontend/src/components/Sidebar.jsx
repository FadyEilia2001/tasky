import React from "react";
import { FaAccusoft } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { RiHome8Fill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { MdCreate } from "react-icons/md";

const Sidebar = ({ handleClick }) => {
  return (
    <div
      style={{ zIndex: 1000 }}
      className=" fixed top-0 left-0 p-4 h-screen w-64 m-0 bg-white dark:bg-gray-800 dark:text-white"
    >
      {/* title and close button div */}
      <div className="">
        <AiOutlineMenuFold
          size={37}
          className="cursor-pointer ml-48 hover:text-green-900 ease-in-out text-green-600 absolute mt-3"
          style={{ zIndex: 1000 }}
          onClick={handleClick}
        />

        <div className="flex items-center p-4">
          {" "}
          {/* title and name */}
          <FaAccusoft size={37} className="text-green-400" />
          <p className="ml-10 text-gray-900 tracking-widest font-bold dark:text-white">
            TASKY
          </p>
        </div>
        {/* end title and name */}
      </div>{" "}
      {/* end title and close buttong div */}
      {/* Routes */}
      <div className="flex flex-col px-5 gap-y-8 mt-4 dark:text-white">
        {/* Dashboard Link */}
        <NavLink
          to="/dashboard"
          className="flex items-center gap-x-2 leading-6 text-lg hover:text-green-600"
        >
          <RiHome8Fill />
          Home
        </NavLink>

        {/* Tasks link */}
        <NavLink
          to="/tasks"
          className="flex items-center gap-x-2 leading-6 text-lg hover:text-green-600"
        >
          <FaTasks />
          Tasks
        </NavLink>

        {/* Create a task link */}
        <NavLink
          to="/createtask"
          className="flex hover:text-black items-center gap-x-2 leading-6 text-lg ease-in-out text-green-600 "
        >
          <MdCreate />
          New Task
        </NavLink>
      </div>
      <button className="bg-green-500 absolute bottom-8 left-8 text-white px-4 text-lg  py-2 hover:bg-green-600 cursor-pointer rounded-lg flex items-center gap-x-4 text-semibold">
        <MdCreate />
        Log out - Bye
      </button>
      {/* main div close */}
    </div>
  );
};

export default Sidebar;
