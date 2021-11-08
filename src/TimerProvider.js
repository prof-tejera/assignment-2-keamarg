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
  const [countdownTimer, setCountdownTimer] = useState(true);
  const [countdownSettings, setCountdownSettings] = useState(false);
  const [xyTimer, setXyTimer] = useState(true);
  const [xySettings, setXySettings] = useState(false);
  const [tabataTimer, setTabataTimer] = useState(true);
  const [tabataSettings, setTabataSettings] = useState(false);

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
        countdownTimer,
        setCountdownTimer,
        countdownSettings,
        setCountdownSettings,
        xyTimer,
        setXyTimer,
        xySettings,
        setXySettings,
        tabataTimer,
        setTabataTimer,
        tabataSettings,
        setTabataSettings,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
