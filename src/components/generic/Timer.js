import React, { useContext, useRef } from "react";
import { TimerContext } from "../../TimerProvider";
import styled from "styled-components";
import Panel from "../generic/Panel";
import Settings from "../generic/Settings";
import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import { COLORS } from "../../utils/helpers";
import { useTimerStarter } from "../../utils/hooks";

const Title = styled.h1`
  color: ${COLORS.text};
`;
const UpperPanel = styled.div`
  position: relative;
  height: 15rem;
  .false {
    color: ${COLORS.stop};
    animation: pulse 1.2s ease infinite, color 0.3s ease;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes color {
    0% {
      color: black;
    }
    100% {
      color: ${COLORS.stop};
    }
  }

  i.stopwatch {
    font-size: 10rem;
    opacity: 40%;
    display: block;
  }
  .settingsBtn {
    z-index: 1;
    font-size: 1.5rem;
    // display: block;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: transparent;
  }
`;
const LowerPanel = styled.div`
  height: 15rem;
`;

const SettingsPanel = styled.div`
  position: relative;
  height: 25rem;
  .settingsBtn {
    z-index: 1;
    font-size: 1.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: transparent;
  }
`;

const Timer = (props) => {
  const { time, setTime } = useContext(TimerContext);
  const { stopwatchTimer, setStopwatchTimer } = useContext(TimerContext);
  const { stopwatchSettings, setStopwatchSettings } = useContext(TimerContext);
  const { countdownTimer, setCountdownTimer } = useContext(TimerContext);
  const { countdownSettings, setCountdownSettings } = useContext(TimerContext);
  const { tabataTimer, setTabataTimer } = useContext(TimerContext);
  const { tabataSettings, setTabataSettings } = useContext(TimerContext);
  const { xyTimer, setXyTimer } = useContext(TimerContext);
  const { xySettings, setXySettings } = useContext(TimerContext);
  const { isRunning, setIsRunning } = useContext(TimerContext);
  const { btnState, setBtnState } = useContext(TimerContext);
  const { settingsState, setSettingsState } = useContext(TimerContext);
  const { savedTime, setSavedTime } = useContext(TimerContext);

  // Alternative solution with less lines of code, but it seems "eval" is on the eslint most wanted list, so I decided to opt for the solution with conditionals (below). Maybe there's a better way to do what I am trying to do?

  // timer.current = eval(props.timerType.toLowerCase() + "Timer");
  // setTimer.current = eval("set" + props.timerType + "Timer");
  // settings.current = eval(props.timerType.toLowerCase() + "Settings");
  // setSettings.current = eval("set" + props.timerType + "Settings");

  //Less elgant solution with switch, that works without eslint hiccups
  const timer = useRef();
  const setTimer = useRef();
  const settings = useRef();
  const setSettings = useRef();

  switch (props.timerType) {
    case "Stopwatch": {
      timer.current = stopwatchTimer;
      setTimer.current = setStopwatchTimer;
      settings.current = stopwatchSettings;
      setSettings.current = setStopwatchSettings;
      break;
    }
    case "Countdown": {
      timer.current = countdownTimer;
      setTimer.current = setCountdownTimer;
      settings.current = countdownSettings;
      setSettings.current = setCountdownSettings;
      break;
    }
    case "XY": {
      timer.current = xyTimer;
      setTimer.current = setXyTimer;
      settings.current = xySettings;
      setSettings.current = setXySettings;
      break;
    }
    case "Tabata": {
      timer.current = tabataTimer;
      setTimer.current = setTabataTimer;
      settings.current = tabataSettings;
      setSettings.current = setTabataSettings;
      break;
    }
    default: {
      console.log("no timer selected");
    }
  }

  const handleClick = (e) => {
    if (props.timerType === "Stopwatch") {
      setSavedTime(0);
    }
    if (e.currentTarget.value === "reset") {
      setTime(savedTime);
      setIsRunning(false);
    }

    if (e.currentTarget.value === "start" || e.currentTarget.value === "stop") {
      setIsRunning(!isRunning);
      setBtnState(!btnState);
    }
    if (e.currentTarget.value === "settings") {
      setSettingsState(!settingsState);
      setSavedTime(time);
    }
  };
  useTimerStarter(props.timerType);

  if (!settingsState || props.timerType === "Stopwatch") {
    return (
      <Panel timerType={props.timerType}>
        <UpperPanel className="text-center">
          <Title>{props.timerType}</Title>
          {props.timerType !== "Stopwatch" ? (
            <Button
              styleName="settingsBtn"
              btnState={timer.current}
              settingsState={settings.current}
              setBtnState={setTimer.current}
              setSettingsState={setSettings.current}
              onClick={handleClick}
              value="settings"
            ></Button>
          ) : null}
          <i className={`bi bi-stopwatch stopwatch ${!isRunning}`}></i>
        </UpperPanel>
        <LowerPanel className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <DisplayTime
                styleName="col text-center"
                // time={timerValue(time)}
              />
            </div>
            <div className="row justify-content-around">
              <Button
                styleName="col-5"
                btnState={timer.current}
                value={btnState ? "start" : "stop"}
                setBtnState={setTimer.current}
                onClick={handleClick}
              ></Button>
              <Button
                styleName="col-5"
                btnState={timer.current}
                value="reset"
                setBtnState={setTimer.current}
                onClick={handleClick}
              ></Button>
            </div>
          </div>
        </LowerPanel>
      </Panel>
    );
  }
  return (
    <Panel timerType={props.timerType}>
      <SettingsPanel className="settingspanel text-center d-flex align-items-center justify-content-center">
        <Button
          type="settingsBtn"
          styleName="settingsBtn"
          btnState={timer.current}
          settingsState={settings.current}
          setBtnState={setTimer.current}
          setSettingsState={setSettings.current}
          onClick={handleClick}
          value="settings"
        ></Button>
        <Settings styleName="p-2" timerType={props.timerType}></Settings>
      </SettingsPanel>
    </Panel>
  );
};
export default Timer;
