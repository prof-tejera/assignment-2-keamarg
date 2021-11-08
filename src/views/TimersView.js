import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import TimerProvider from "../TimerProvider";
import Navbar from "../components/generic/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const routes = [
    {
      path: "/",
      component: Stopwatch,
    },
    {
      path: "/assignment-2-keamarg",
      component: Stopwatch,
    },
    {
      path: "/Stopwatch",
      component: Stopwatch,
    },
    {
      path: "/Countdown",
      component: Countdown,
    },
    {
      path: "/XY",
      component: XY,
    },
    {
      path: "/Tabata",
      component: Tabata,
    },
  ];

  return (
    <Timers>
      <Router>
        <Navbar />
        <Switch>
          <TimerProvider>
            {routes.map(({ path, component }, key) => (
              <Route exact path={path} component={component} key={key} />
            ))}
          </TimerProvider>
        </Switch>
      </Router>
    </Timers>
  );
};

export default App;
