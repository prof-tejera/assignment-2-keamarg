import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS, BUTTONS } from "../../utils/helpers";

const Btn = styled.button`
  border-radius: 0.3rem;
  // padding: 0.5rem;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${COLORS.text};
  transition: 0.2s ease;
  :hover {
    opacity: 0.6;
  }
  background-color: ${(props) =>
    props.value === "start"
      ? COLORS.start
      : props.value === "stop"
      ? COLORS.stop
      : COLORS.reset};
`;

const Button = (props) => {
  Button.defaultProps = {
    styleName: "",
    value: "",
    onClick: null,
  };
  const { value } = props;
  return (
    <Btn
      className={props.styleName}
      value={props.value}
      onClick={props.onClick}
    >
      <i className={BUTTONS[value]}></i>
    </Btn>
  );
};
Button.propTypes = {
  styleName: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
