import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const logUser = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const saveUserName = (name) => {
    setUser(name);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, logUser, saveUserName }}>
      {children}
    </AppContext.Provider>
  );
};
