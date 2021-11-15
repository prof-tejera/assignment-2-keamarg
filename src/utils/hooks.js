import { useContext, useRef, useEffect, useState } from "react";
import { TimerContext } from "../TimerProvider";

export const useTimerStarter = (timerType) => {
  const [delay] = useState(1000);
  const { isRunning } = useContext(TimerContext);
  const { time, setTime } = useContext(TimerContext);

  useInterval(
    () => {
      if (timerType === "Stopwatch") {
        setTime(Number(time) + 1);
      } else {
        setTime(Number(time) - 1);
      }
    },
    isRunning ? delay : null
  );

  //   function handleDelayChange(e) {
  //     setDelay(Number(e.target.value));
  //   }

  //   function handleIsRunningChange(e) {
  //     setIsRunning(e.target.checked);
  //   }

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
