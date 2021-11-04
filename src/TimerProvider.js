import React, { createContext, useState } from "react";

export const TimerContext = createContext({
  setBtnState: () => {
    console.log("setBtnState: Im outside the Timerprovider");
  },
  setSettingsState: () => {
    console.log("setSettingsState: Im outside the Timerprovider");
  },
});

const TimerProvider = ({ children }) => {
  const [btnState, setBtnState] = useState(true);
  const [settingsState, setSettingsState] = useState(false);
  const [stopwatchTimer, setStopwatchTimer] = useState(true);
  const [stopwatchSettings, setStopwatchSettings] = useState(false);

  return (
    <TimerContext.Provider
      value={{
        btnState,
        setBtnState,
        settingsState,
        setSettingsState,
        stopwatchTimer,
        setStopwatchTimer,
        stopwatchSettings,
        setStopwatchSettings,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
