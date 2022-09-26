import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaAccusoft } from "react-icons/fa";
import React from "react";
import Sidebar from "./Sidebar";

const Navbar = ({ sidebar, handleClick }) => {
  return (
    <div
      className="p-2 h-24 flex justify-between items-center"
      onClick={handleClick}
    >
      {sidebar ? (
        <AiOutlineMenuUnfold size={37} className="cursor-pointer ml-6 " />
      ) : (
        <>
          <AiOutlineMenuFold
            size={37}
            className="cursor-pointer ml-48 "
            style={{ zIndex: 1000 }}
          />
          <Sidebar />
        </>
      )}

      {sidebar ? (
        <div className="flex items-center p-4">
          <FaAccusoft size={34} className="text-green-500" />
          <p className="mx-6 font-semibold">Tasky is Here!</p>
        </div>
      ) : (
        <FaAccusoft size={37} className="text-green-500 m-4 mr-8" />
      )}
    </div>
  );
};

export default Navbar;
