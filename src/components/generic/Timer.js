import React, { useContext, useRef } from "react";
import { TimerContext } from "../../TimerProvider";
import styled from "styled-components";
import Panel from "../generic/Panel";
import Settings from "../generic/Settings";
import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import { COLORS } from "../../utils/helpers";
import { timerValue } from "../../utils/helpers.js";

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
      console.log("pingStopwatch");
      timer.current = stopwatchTimer;
      setTimer.current = setStopwatchTimer;
      settings.current = stopwatchSettings;
      setSettings.current = setStopwatchSettings;
      break;
    }
    case "Countdown": {
      console.log("pingCountdown");
      timer.current = countdownTimer;
      setTimer.current = setCountdownTimer;
      settings.current = countdownSettings;
      setSettings.current = setCountdownSettings;
      break;
    }
    case "XY": {
      console.log("pingXY");
      timer.current = xyTimer;
      setTimer.current = setXyTimer;
      settings.current = xySettings;
      setSettings.current = setXySettings;
      break;
    }
    case "Tabata": {
      console.log("pingTabata");
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

  if (!settings.current) {
    return (
      <Panel timerType={props.timerType}>
        <UpperPanel className="text-center">
          <Title>{props.timerType}</Title>
          <Button
            type={settings.current ? "exitSettings" : "enterSettings"}
            styleName="settingsBtn"
            btnState={timer.current}
            settingsState={settings.current}
            setBtnState={setTimer.current}
            setSettingsState={setSettings.current}
          ></Button>
          <i className={`bi bi-stopwatch stopwatch ${timer.current}`}></i>
        </UpperPanel>
        <LowerPanel className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <DisplayTime
                styleName="col text-center"
                time={timerValue(time)}
              />
            </div>
            <div className="row justify-content-around">
              <Button
                styleName="col-5"
                btnState={timer.current}
                type={timer.current ? "Start" : "Stop"}
                setBtnState={setTimer.current}
              ></Button>
              <Button
                styleName="col-5"
                btnState={timer.current}
                type="Reset"
                setBtnState={setTimer.current}
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
          type={settings.current ? "exitSettings" : "enterSettings"}
          styleName="settingsBtn"
          btnState={timer.current}
          settingsState={settings.current}
          setBtnState={setTimer.current}
          setSettingsState={setSettings.current}
        ></Button>
        <Settings styleName="p-2" timerType={props.timerType}></Settings>
      </SettingsPanel>
    </Panel>
  );
};
export default Timer;
