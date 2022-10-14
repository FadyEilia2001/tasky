import React from "react";
import { useState } from "react";
import axios from "axios";

const RegForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [wrongPwd, setWrongPwd] = useState(false);
  const [token, setToken] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    if (password === confirmPwd) {
      setWrongPwd(false);
      const user = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );

      
      console.log(user);
      if (user.status === "Created") {
        await setToken(`Bearer ${user.data.token}`);

        localStorage.setItem("accessToken", JSON.stringify(token));
      } else {
      }
    } else {
      setWrongPwd(true);
    }
  };

  return (
    <form
      className="px-8 w-72 md:w-76 lg:w-76 xl:w-76 mx-auto  py-10 border items-center justify-center shadow-lg rounded-xl mt-24 dark:bg-gray-700 flex flex-col"
      onSubmit={submitForm}
    >
      <input
        type="text"
        placeholder="Name"
        className="mb-4 rounded-md px-2 py-1"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="E-mail"
        className="mb-4 rounded-md px-2 py-1"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 rounded-md px-2 py-1"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="mb-4 rounded-md px-2 py-1"
        onChange={(e) => setConfirmPwd(e.target.value)}
        value={confirmPwd}
      />

      <button
        type="submit"
        className="bg-green-400 rounded-md mt-4 py-2 px-4 text-white font-semibold tracking-widest"
      >
        Register
        {/* <Link to="/dashboard">Register</Link> */}
      </button>
      {wrongPwd && (
        <p className="mt-4 text-red-500 font-medium">Passwords do not match</p>
      )}
    </form>
  );
};

export default RegForm;
