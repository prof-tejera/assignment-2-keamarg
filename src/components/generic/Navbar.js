import React, { useContext } from "react";
import { TimerContext } from "../../TimerProvider";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../utils/helpers";
import styled from "styled-components";

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0.5rem 0;
  overflow: hidden;
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  width: 20rem;

  a {
    color: ${COLORS.text};
    text-decoration: none;
  }
  .Stopwatch,
  .Countdown,
  .XY,
  .Tabata {
    background-color: ${COLORS.nav};
    transition: 0.5s;
  }
  .Stopwatch:hover {
    background-color: ${COLORS.stopwatch};
  }
  .Countdown:hover {
    background-color: ${COLORS.countdown};
  }
  .Tabata:hover {
    background-color: ${COLORS.tabata};
  }
  .XY:hover {
    background-color: ${COLORS.xy};
  }

  li {
    display: inline;
    list-style-type: none;
    text-decoration: none;
    padding: 0.75rem;
  }
  .current {
    .Stopwatch {
      background-color: ${COLORS.stopwatch};
    }
    .Countdown {
      background-color: ${COLORS.countdown};
    }
    .XY {
      background-color: ${COLORS.xy};
    }
    .Tabata {
      background-color: ${COLORS.tabata};
    }
  }
  .active {
    background-color: #04aa6d;
  }
`;

const links = [
  { name: "Stopwatch", path: "/" },
  { name: "Countdown", path: "/Countdown" },
  { name: "XY", path: "/XY" },
  { name: "Tabata", path: "/Tabata" },
];

const Navbar = () => {
  const { setTime } = useContext(TimerContext);
  const { setIsRunning } = useContext(TimerContext);
  const { setBtnState } = useContext(TimerContext);

  const handleClick = () => {
    setTime(0);
    setIsRunning(false);
    setBtnState(false);
  };

  return (
    <NavList>
      {links.map((link, index) => (
        <NavLink key={index} to={link.path} exact activeClassName="current">
          <li className={link.name} onClick={handleClick}>
            {link.name}
          </li>
        </NavLink>
      ))}
    </NavList>
  );
};
export default Navbar;
