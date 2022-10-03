import React from "react";
import { MdCreate } from "react-icons/md";
import Charts from "../components/dashboard/Charts";
import Overview from "../components/dashboard/Overview";
import Tasks from "../components/dashboard/Tasks";

const Dashboard = () => {
  return (
    <div className="flex items-center lg:items-start xl:items-start 2xl:items-start flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-y-4 gap-x-8">
      <button className="bg-green-500 lg:absolute md:absolute top-2.5 left-24 text-white px-4 text-lg  py-2 hover:bg-green-600 cursor-pointer rounded-lg flex items-center gap-x-4 text-semibold">
        <MdCreate />
        Create Task
      </button>

      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-3/4">
        <Overview />
        <Tasks />
      </div>

      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-3/4">
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
