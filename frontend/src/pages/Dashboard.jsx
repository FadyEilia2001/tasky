import React from "react";
import { MdCreate } from "react-icons/md";
import Charts from "../components/dashboard/Charts";
import Overview from "../components/dashboard/Overview";

const Dashboard = () => {
  return (
    <div className="flex items-center flex-col gap-y-4 gap-x-8 p-8">
      <button className="bg-green-500 lg:absolute md:absolute top-2.5 left-24 text-white px-4 text-lg  py-2 hover:bg-green-600 cursor-pointer rounded-lg flex items-center gap-x-4 text-semibold">
        <MdCreate />
        Create Task
      </button>

      <div className="w-full md:p-12 lg:p-12 xl:p-12 mt-12">
        <Overview />
      </div>

      {/* <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full lg:mt-5 xl:mt-5 ">
        <Charts />
      </div> */}
    </div>
  );
};

export default Dashboard;
