import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TasksPage from "./pages/TasksPage";
import CreateTask from "./pages/CreateTask";
import { Login } from "./components/Login";
import Register from "./pages/Register";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div
        className={`min-h-screen ${
          darkMode ? `dark bg-gray-900` : `bg-gray-100`
        }`}
      >
        <Navbar
          sidebar={sidebar}
          dark={darkMode}
          handleDark={() => {
            setDarkMode(!darkMode);
          }}
          handleClick={() => setSidebar(!sidebar)}
        />

        {/* main app div ----testing-----*/}
        <main className="container mx-auto mt-4">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/Tasks" element={<TasksPage />} />
            <Route exact path="/createtask" element={<CreateTask />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
