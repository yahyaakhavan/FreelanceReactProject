/* eslint-disable no-undef */
import { createContext, useContext, useEffect } from "react";

import useLocalStorageState from "../hooks/useLocalStorageState";

/* eslint-disable react/prop-types */

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [IsdarkMode, SetisDarkMode] = useLocalStorageState(
    "IsdarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const handleDarkmode = () => {
    SetisDarkMode((prev) => {
      return !prev;
    });
  };
  useEffect(() => {
    if (IsdarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [IsdarkMode]);
  return (
    <DarkModeContext.Provider value={{ IsdarkMode, handleDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("The DarkModeContext used outside of context coverage");
  }
  return useContext(DarkModeContext);
}
