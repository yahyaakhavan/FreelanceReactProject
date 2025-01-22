/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const SidebarStatusContext = createContext();
export function SidebarStatusProvider({ children }) {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const toggleSidebar = () => {
    setSidebarStatus((prev) => {
      return !prev;
    });
  };
  return (
    <SidebarStatusContext.Provider value={{ sidebarStatus, toggleSidebar }}>
      {children}
    </SidebarStatusContext.Provider>
  );
}

export function useSidebarStatus() {
  const context = useContext(SidebarStatusContext);
  if (context === undefined) {
    throw new Error(
      "The SidebarStatusContext used outside of context coverage "
    );
  } else {
    return context;
  }
}
