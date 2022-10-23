import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const { logUser, saveUserName } = useContext(AppContext);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log(response.data.token);

      if (response.status > 200 && response.status < 300) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(`Bearer ${response.data.token}`)
        );
        localStorage.setItem(
          "userName",
          JSON.stringify(response.data.user.name)
        );
        logUser();

        saveUserName(response.data.user.name);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  const captureFormData = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="px-8 w-72 md:w-76 lg:w-76 xl:w-76 mx-auto  py-10 border flex flex-col items-center justify-center shadow-lg rounded-xl mt-24 dark:bg-gray-700">
      <div className="mb-8">
        <h2 className="font-bold text-green-500">Come on in!</h2>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          className="mb-4 rounded-md px-2 py-1"
          onChange={captureFormData}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="mb-4 rounded-md px-2 py-1"
          onChange={captureFormData}
          value={formData.password}
        />
        <button
          type="submit"
          className="bg-green-400 rounded-md mt-4 py-2 text-white font-semibold tracking-widest"
        >
          Submit
        </button>

        <p className="mt-4 text-sm px-4">
          don't have an account?
          <Link to="/register">
            <span className="text-blue-400 block mt-2 hover:underline">
              Register Here
            </span>
          </Link>
        </p>
      </form>
      {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}
    </div>
  );
};
