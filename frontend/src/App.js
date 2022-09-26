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

      {/* main app div ----testing-----*/}
      <main className="p-16 container mx-auto">
        <div className="bg-green-50 rounded-3xl p-4 h-64">test</div>
      </main>
    </div>
  );
}

export default App;
