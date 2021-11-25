import React, { createContext, useState } from "react";

export const TimerContext = createContext({
  setBtnState: () => {
    console.log("setBtnState: Im outside the Timerprovider");
  },
  setSettingsState: () => {
    console.log("setSettingsState: Im outside the Timerprovider");
  },
});

// I had different experiments going, but ended up wrapping one big provider around the whole app.

const TimerProvider = ({ children }) => {
  const [btnState, setBtnState] = useState(true);
  const [settingsState, setSettingsState] = useState(true);
  const [time, setTime] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [rest, setRest] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [savedTime, setSavedTime] = useState(0);
  const [docs, setDocs] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [currentRound, setCurrentRound] = useState(rounds);
  const [showSettingsMessage, setShowSettingsMessage] = useState(false);
  const [showTimerRounds, setShowTimerRounds] = useState(true);
  const [currentRest, setCurrentRest] = useState(false);

  return (
    <TimerContext.Provider
      value={{
        currentRest,
        setCurrentRest,
        showTimerRounds,
        setShowTimerRounds,
        showSettingsMessage,
        setShowSettingsMessage,
        currentRound,
        setCurrentRound,
        message,
        setMessage,
        showMessage,
        setShowMessage,
        docs,
        setDocs,
        savedTime,
        setSavedTime,
        isRunning,
        setIsRunning,
        time,
        setTime,
        rounds,
        setRounds,
        rest,
        setRest,
        btnState,
        setBtnState,
        settingsState,
        setSettingsState,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
