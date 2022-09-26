import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="">
      <Navbar sidebar={sidebar} handleClick={() => setSidebar(!sidebar)} />
    </div>
  );
}

export default App;
