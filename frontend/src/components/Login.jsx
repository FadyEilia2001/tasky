import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="px-8 w-72 mx-auto  py-10 border flex flex-col items-center justify-center shadow-lg rounded-xl mt-24 dark:bg-gray-700">
      <div className="mb-8">
        <h2 className="font-bold text-green-500">Come on in!</h2>
      </div>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="E-mail"
          className="mb-4 rounded-md px-2 py-1"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 rounded-md px-2 py-1"
        />
        <button
          type="submit"
          className="bg-green-400 rounded-md mt-4 py-2 text-white font-semibold tracking-widest"
        >
          <Link to="/dashboard">Submit</Link>
        </button>
      </form>
    </div>
  );
};
