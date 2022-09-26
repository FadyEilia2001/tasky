import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`h-screen ${darkMode ? `dark bg-gray-900` : `bg-neutral-100`}`}
    >
      <Navbar
        sidebar={sidebar}
        dark={darkMode}
        handleDark={() => {
          setDarkMode(!darkMode);
        }}
        handleClick={() => setSidebar(!sidebar)}
      />

      <div className="dark:text-white p-8 ">
        Main App Div - router will go here - need to install router tomorrow
      </div>
    </div>
  );
}

export default App;
