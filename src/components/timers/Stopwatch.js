import React, { useContext } from "react";
import { TimerContext } from "../../TimerProvider";
import styled from "styled-components";
import Panel from "../generic/Panel";
import Settings from "../generic/Settings";
import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import { COLORS } from "../../utils/helpers";

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

const Stopwatch = () => {
  const timerType = "Stopwatch";
  const { stopwatchTimer, setStopwatchTimer } = useContext(TimerContext);
  const { stopwatchSettings, setStopwatchSettings } = useContext(TimerContext);

  if (!stopwatchSettings) {
    return (
      <Panel timerType={timerType}>
        <UpperPanel className="text-center">
          <Title>Stopwatch</Title>
          <Button
            type={stopwatchSettings ? "exitSettings" : "enterSettings"}
            styleName="settingsBtn"
            btnState={stopwatchTimer}
            settingsState={stopwatchSettings}
            sendBtnState={setStopwatchTimer}
            sendSettingsState={setStopwatchSettings}
          ></Button>
          <i className={`bi bi-stopwatch stopwatch ${stopwatchTimer}`}></i>
        </UpperPanel>
        <LowerPanel className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <DisplayTime
                styleName="col text-center"
                time={`0${0}:0${0}:0${0}`}
              />
            </div>
            <div className="row justify-content-around">
              <Button
                styleName="col-5"
                btnState={stopwatchTimer}
                type={stopwatchTimer ? "Start" : "Stop"}
                sendBtnState={setStopwatchTimer}
              ></Button>
              <Button
                styleName="col-5"
                btnState={stopwatchTimer}
                type="Reset"
                sendBtnState={setStopwatchTimer}
              ></Button>
            </div>
          </div>
        </LowerPanel>
      </Panel>
    );
  }
  return (
    <Panel timerType={timerType}>
      <UpperPanel className="text-center d-flex align-items-center justify-content-center">
        <Button
          type={stopwatchSettings ? "exitSettings" : "enterSettings"}
          styleName="settingsBtn"
          btnState={stopwatchTimer}
          settingsState={stopwatchSettings}
          sendBtnState={setStopwatchTimer}
          sendSettingsState={setStopwatchSettings}
        ></Button>
        <Settings styleName="p-2" type="Stopwatch"></Settings>
      </UpperPanel>
    </Panel>
  );
};
export default Stopwatch;
