import React from "react";

const Overview = () => {
  return (
    <div className="w-full p-4 bg-white mb-8 rounded-xl mt-4 dark:bg-gray-700 dark:text-white">
      <h2 className="mb-8 text-green-700 text-3xl font-normal tracking-widest">
        overview
      </h2>

      <div className="flex justify-around gap-x-4 flex-col xl:flex-row">
        <div className="flex flex-col items-center mb-4 ">
          <p className="mb-3 font-semibold tracking-widest">All Tasks</p>
          <div className="border-2 border-green-500 rounded-full p-4 w-48  flex flex-col items-center">
            <p className="font-bold">32</p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4">
          <p className="mb-3 font-semibold tracking-widest">This week</p>
          <div className="border-2 border-green-500 rounded-full p-4 w-48  flex flex-col items-center">
            <p className="font-bold">9</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="mb-3 font-semibold tracking-widest">pending</p>
          <div className="border-2 border-green-500 rounded-full p-4 w-48  flex flex-col items-center">
            <p className="font-bold">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
