import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [error, setError] = useState("");

  const { isLoggedIn, logUser, saveUserName } = useContext(AppContext);

  const submitForm = async (e) => {
    setError("");
    e.preventDefault();
    if (password !== confirmPwd) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.status > 200 && response.status < 300) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(`Bearer ${response.data.token}`)
        );
        localStorage.setItem("userName", JSON.stringify(name));
        logUser();

        saveUserName(response.data.user.name);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response.data.msg);
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

      {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}
    </form>
  );
};

export default RegForm;
