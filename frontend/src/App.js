import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import { Login } from "./components/Login";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div
        className={`h-screen ${darkMode ? `dark bg-gray-900` : `bg-gray-100`}`}
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
        <main className="px-20 container mx-auto flex items-center justify-center border mt-12 border-red-500">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/Tasks" element={<Tasks />} />
            <Route exact path="/createtask" element={<CreateTask />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
