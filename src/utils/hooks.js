import { useContext, useRef, useEffect, useState } from "react";
import { TimerContext } from "../TimerProvider";
import { TIMERS, MESSAGES } from "./helpers";

export const useTimer = (timerType) => {
  const [delay] = useState(1000);
  const { isRunning, setIsRunning } = useContext(TimerContext);
  const { time, setTime } = useContext(TimerContext);
  const { setBtnState } = useContext(TimerContext);
  const { setShowMessage } = useContext(TimerContext);
  const { setMessage } = useContext(TimerContext);

  useInterval(
    () => {
      if (timerType === TIMERS.stopwatch) {
        setTime(Number(time) + 1);
      } else {
        if (time > 0) {
          setTime(Number(time) - 1);
        } else {
          setIsRunning(false);
          setBtnState(true);
          setMessage(MESSAGES.finished);
          setShowMessage(true);
        }
      }
    },
    isRunning ? delay : null
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
};
