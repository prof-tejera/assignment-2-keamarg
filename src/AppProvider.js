import React, { createContext, useState } from "react";

export const AppContext = createContext({
  setBtnState: () => {
    console.log("Im outside the provider");
  },
});

const AppProvider = ({ children }) => {
  const [btnState, setBtnState] = useState(true);
  const [settingsState, setSettingsState] = useState(false);

  return (
    <AppContext.Provider
      value={{ btnState, setBtnState, settingsState, setSettingsState }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
