"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [spinner, setSpinner] = useState(false);

  const values = {
    spinner,
    setSpinner,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
