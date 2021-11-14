import styled from "styled-components";
import { timerValue } from "../../utils/helpers.js";
import PropTypes from "prop-types";
import { COLORS } from "../../utils/helpers.js";
import React, { useContext } from "react";
import { TimerContext } from "../../TimerProvider";

const SetInput = styled.input`
  // border: 1px solid black;
  color: ${(props) =>
    props.type === "Stopwatch"
      ? COLORS.stopwatch
      : props.type === "Countdown"
      ? COLORS.countdown
      : props.type === "XY"
      ? COLORS.xy
      : COLORS.tabata};
  font-size: 0.8rem;
  border-radius: 0.5rem;
  border: 0px;
`;

const Credentials = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.text};
  padding-top: 0.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${COLORS.text};
  padding-top: 0.5rem;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Settings = (props) => {
  Settings.defaultProps = {
    // type: "Countdown",
    timerType: "Countdown",
    placeholder: "hh:mm:ss",
    placeholderRounds: "hh:mm:ss",
    placeholderRest: "hh:mm:ss",
  };

  const { time, setTime } = useContext(TimerContext);
  const { rounds, setRounds } = useContext(TimerContext);
  const { rest, setRest } = useContext(TimerContext);

  const handleChange = (e) => {
    if (e.target.name === "timer") setTime(e.target.value);
    else if (e.target.name === "rounds") setRounds(e.target.value);
    else setRest(e.target.value);
  };

  return (
    <div className="w-75">
      {props.timerType !== "Stopwatch" ? (
        <>
          <Text>
            <label htmlFor="timer">Set workout time</label>
            <br />
            {timerValue(time)}
          </Text>
          <SetInput
            name="timer"
            type="range"
            placeholder={props.placeholder}
            min="0"
            max="7200"
            step="15"
            value={time}
            onChange={handleChange}
          ></SetInput>
        </>
      ) : null}
      {props.timerType === "XY" || props.timerType === "Tabata" ? (
        <>
          <Text>
            <label htmlFor="rounds">Set number of rounds</label>
            <br />
            {rounds}
          </Text>
          <SetInput
            name="rounds"
            type="range"
            placeholder={props.placeholderRounds}
            min="0"
            max="5"
            step="1"
            value={rounds}
            onChange={handleChange}
          ></SetInput>
        </>
      ) : null}
      {props.timerType === "Tabata" ? (
        <>
          <Text>
            <label htmlFor="rest">Set rest time</label>
            <br />
            {timerValue(rest).substr(4, 6)}
          </Text>
          <SetInput
            name="rest"
            type="range"
            placeholder={props.placeholderRest}
            min="0"
            max="300"
            step="15"
            value={rest}
            onChange={handleChange}
          ></SetInput>
        </>
      ) : null}
      <Credentials>By Martin Gundtoft</Credentials>
    </div>
  );
};

Settings.propTypes = {
  type: PropTypes.string,
  timerType: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderRounds: PropTypes.string,
  placeholderRest: PropTypes.string,
};

export default Settings;
