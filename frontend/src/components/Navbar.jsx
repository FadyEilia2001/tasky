import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaAccusoft } from "react-icons/fa";
import React from "react";
import Sidebar from "./Sidebar";
import { RiMoonFill } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";

const Navbar = ({ sidebar, handleClick, dark, handleDark }) => {
  return (
    <div className="px-2 py-4 h-16 flex justify-between items-center dark:bg-gray-900">
      {/* left side of navbar that opens and closes - first if navbar is closed */}
      {!sidebar ? (
        <AiOutlineMenuUnfold
          size={37}
          className="cursor-pointer ml-6 text-green-600"
          onClick={handleClick}
        />
      ) : (
        // if navbar is open

        <Sidebar handleClick={handleClick} />
      )}

      {/* middle icon dark mode*/}
      {dark ? (
        <RiMoonFill
          onClick={handleDark}
          size={24}
          className="text-green-400 cursor-pointer"
        />
      ) : (
        <RiMoonLine
          onClick={handleDark}
          size={24}
          className="text-green-400 cursor-pointer"
        />
      )}

      {/* right side of navbar */}
      <div className="flex items-center p-4">
        <FaAccusoft size={34} className="text-green-500" />
        <p className="ml-4 font-semibold text-2xl  text-black dark:text-white">
          Tasky
        </p>
      </div>

      {/* main div close */}
    </div>
  );
};

export default Navbar;
