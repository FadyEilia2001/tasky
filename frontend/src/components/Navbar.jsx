import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaAccusoft } from "react-icons/fa";
import React from "react";
import Sidebar from "./Sidebar";
import { RiMoonFill } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";

const Navbar = ({ sidebar, handleClick, dark, handleDark }) => {
  return (
    <div className="p-2 h-24 flex justify-between items-center dark:bg-gray-900">
      {/* left side of navbar that opens and closes - first if navbar is closed */}
      {!sidebar ? (
        <AiOutlineMenuUnfold
          size={37}
          className="cursor-pointer ml-6 text-green-600"
          onClick={handleClick}
        />
      ) : (
        // if navbar is open
        <>
          <AiOutlineMenuFold
            size={37}
            className="cursor-pointer ml-48 text-green-600"
            style={{ zIndex: 1000 }}
            onClick={handleClick}
          />
          <Sidebar />
        </>
      )}

      {/* middle icon dark mode*/}
      {dark ? (
        <RiMoonFill onClick={handleDark} size={24} className="text-green-400" />
      ) : (
        <RiMoonLine onClick={handleDark} size={24} className="text-green-400" />
      )}

      {/* right side of navbar */}
      {!sidebar ? (
        <div className="flex items-center p-4">
          <FaAccusoft size={34} className="text-green-500" />
          <p className="mx-6 font-semibold  text-black dark:text-white">
            Tasky is Here!
          </p>
        </div>
      ) : (
        <FaAccusoft size={37} className="text-green-500 m-4 mr-8" />
      )}

      {/* main div close */}
    </div>
  );
};

export default Navbar;
