import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <MyContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
