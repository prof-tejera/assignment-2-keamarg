import React, { useContext } from "react";
import { TimerContext } from "../../TimerProvider";
import styled from "styled-components";
import PropTypes from "prop-types";
import { timerValue } from "../../utils/helpers.js";

const Display = styled.label`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 300;
  // font-family: "Orbitron", sans-serif;
  color: white;
`;

const DisplayTime = (props) => {
  Display.defaultProps = {
    styleName: "myClass",
  };
  const { time } = useContext(TimerContext);
  return <Display className={props.styleName}>{timerValue(time)}</Display>;
};
Display.propTypes = {
  styleName: PropTypes.string,
};

export default DisplayTime;
