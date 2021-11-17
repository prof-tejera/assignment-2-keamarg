import React, { useContext } from "react";
import { TimerContext } from "../../TimerProvider";
import styled from "styled-components";
import Panel from "../generic/Panel";
import Settings from "../generic/Settings";
import Button from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import { BTNTYPE, COLORS, TIMERS, MESSAGES } from "../../utils/helpers";
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
  .ctaBtn {
    z-index: 1;
    font-size: 1.5rem;
    background-color: transparent;
  }
`;
const Middlepanel = styled.div`
  height: 5rem;
  padding-top: 4rem;
  .ctaBtn {
    z-index: 1;
    font-size: 1.5rem;
    background-color: transparent;
    line-height: 1rem;
  }
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
const Message = styled.p`
  color: ${COLORS.text};}
  line-height: 2rem;

`;

const Timer = (props) => {
  const { time, setTime } = useContext(TimerContext);
  const { isRunning, setIsRunning } = useContext(TimerContext);
  const { btnState, setBtnState } = useContext(TimerContext);
  const { settingsState, setSettingsState } = useContext(TimerContext);
  const { savedTime, setSavedTime } = useContext(TimerContext);
  const { docs } = useContext(TimerContext);
  const { rounds, setRounds } = useContext(TimerContext);
  const { currentRound, setCurrentRound } = useContext(TimerContext);
  const { message, setMessage } = useContext(TimerContext);
  const { showMessage, setShowMessage } = useContext(TimerContext);
  const { showSettingsMessage, setShowSettingsMessage } =
    useContext(TimerContext);
  const { showTimerRounds, setShowTimerRounds } = useContext(TimerContext);

  const { timerType } = props;

  const handleClick = (e) => {
    if (!docs) {
      // Start/stop button
      if (
        e.currentTarget.value === BTNTYPE.start ||
        e.currentTarget.value === BTNTYPE.stop
      ) {
        if (!showMessage) {
          setIsRunning(!isRunning);
          setBtnState(!btnState);
        }
      }

      //Reset button
      if (e.currentTarget.value === BTNTYPE.reset) {
        setTime(savedTime);
        setBtnState(true);
        setIsRunning(false);
        setShowMessage(false);
      }

      //Forward button
      if (e.currentTarget.value === BTNTYPE.forward) {
        setTime(0);
        setRounds(0);
      }

      //Settings button
      if (e.currentTarget.value === BTNTYPE.settings) {
        setSettingsState(!settingsState);
        setBtnState(true);
        setSavedTime(time);
        setIsRunning(false);
        setShowTimerRounds(false);
        setShowMessage(false);

        if (timerType === TIMERS.countdown) {
          const t = Number(time);
          if (!t) {
            setMessage(MESSAGES.settimer);
            setShowSettingsMessage(true);
          } else {
            setShowSettingsMessage(false);
            setShowTimerRounds(true);
          }
        }
        if (timerType === TIMERS.xy || timerType === TIMERS.tabata) {
          const t = Number(time);
          if (!t || rounds < 1) {
            setMessage(MESSAGES.settimer);
            setShowSettingsMessage(true);
          } else {
            // setMessage(MESSAGES.finished);
            setShowSettingsMessage(false);
            setShowTimerRounds(true);
          }
        }
      }

      //Stopwatch
      if (timerType === TIMERS.stopwatch) {
        setSavedTime(0);
        setShowTimerRounds(true);
      }

      //Countdown
      if (timerType === TIMERS.countdown) {
      }

      //XY
      if (timerType === TIMERS.xy) {
        setCurrentRound(rounds);
      }

      //Tabata
      if (timerType === TIMERS.tabata) {
        setCurrentRound(rounds);
      }
    }
  };
  useTimerStarter(timerType);

  if (!settingsState || timerType === TIMERS.stopwatch) {
    return (
      <Panel timerType={timerType}>
        <UpperPanel className="text-center">
          <Title>{timerType}</Title>
          {timerType !== TIMERS.stopwatch ? (
            <Button
              styleName="settingsBtn"
              onClick={handleClick}
              value={BTNTYPE.settings}
            ></Button>
          ) : null}
          <i className={`bi bi-stopwatch stopwatch ${!isRunning}`}></i>
        </UpperPanel>
        <Middlepanel>
          <div className="container">
            <div className="row col text-center">
              {showSettingsMessage ? (
                <>
                  <Button
                    styleName="ctaBtn"
                    onClick={handleClick}
                    value={BTNTYPE.settings}
                    inner={message + " "}
                  ></Button>
                </>
              ) : showMessage ? (
                <Message> {message}</Message>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Middlepanel>
        <LowerPanel className="d-flex align-items-center">
          <div className="container">
            <div className="row col text-center">
              {showTimerRounds &&
              (timerType === TIMERS.xy || timerType === TIMERS.tabata) ? (
                <Message>
                  {" "}
                  {currentRound} of {rounds} rounds left
                </Message>
              ) : (
                <Message> &nbsp;</Message>
              )}
              {showTimerRounds ? <DisplayTime /> : <></>}
            </div>
            <div className="row justify-content-around">
              <Button
                styleName="col-3"
                value={btnState ? BTNTYPE.start : BTNTYPE.stop}
                onClick={handleClick}
              ></Button>
              <Button
                styleName="col-3"
                value={BTNTYPE.reset}
                onClick={handleClick}
              ></Button>
              {timerType !== TIMERS.stopwatch ? (
                <Button
                  styleName="col-3"
                  value={BTNTYPE.forward}
                  onClick={handleClick}
                ></Button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </LowerPanel>
      </Panel>
    );
  }
  return (
    <Panel timerType={timerType}>
      <SettingsPanel className="settingspanel text-center d-flex align-items-center justify-content-center">
        <Button
          // type="settingsBtn"
          styleName="settingsBtn"
          onClick={handleClick}
          value={BTNTYPE.settings}
        ></Button>
        <Settings styleName="p-2" timerType={timerType}></Settings>
      </SettingsPanel>
    </Panel>
  );
};
export default Timer;
